import { Controller, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { KafkaContext } from 'src/kafka/kafka-context';
import { HttpService } from '@nestjs/axios';

@Controller()
export class RouteDriverConusmer {
  private logger = new Logger(RouteDriverConusmer.name);

  constructor(private httpService: HttpService) {}

  @MessagePattern('simulation')
  async driverMoved(payload: KafkaContext) {
    this.logger.log(`Received message from topic: ${payload.topic}`);
    const { route_id, lat, lng } = payload.messageValue;
    await this.httpService.axiosRef.post(
      `http://localhost:3000/routes/${route_id}/process-route`,
      {
        lat,
        lng,
      },
    );
  }
}
