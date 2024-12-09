import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  DirectionsRequest,
  Client as GoogleMapsClient,
  TravelMode,
} from '@googlemaps/google-maps-services-js';

@Injectable()
export class DirectionsService {
  constructor(
    private googleMapsClient: GoogleMapsClient,
    private configService: ConfigService,
  ) {}

  async getDirections(originId: string, destinationId: string) {
    console.log(originId, destinationId);
    const requestParams: DirectionsRequest['params'] = {
      origin: `place_id:${originId}`,
      destination: `place_id:${destinationId}`,
      mode: TravelMode.driving,
      key: this.configService.get('GOOGLE_API_KEY'),
    };

    const { data } = await this.googleMapsClient.directions({
      params: requestParams,
    });

    console.log(data);

    return {
      ...data,
      request: {
        origin: {
          place_id: requestParams.origin,
          location: {
            lat: data.routes[0].legs[0].start_location.lat,
            lng: data.routes[0].legs[0].start_location.lng,
          },
        },
        destination: {
          place_id: requestParams.origin,
          location: {
            at: data.routes[0].legs[0].end_location.lat,
            lng: data.routes[0].legs[0].end_location.lng,
          },
        },
        mode: requestParams.mode,
      },
    };
  }
}
