import { Module } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { RoutesController } from './routes.controller';
import { MapsModule } from 'src/maps/maps.module';
import { RouteDriverService } from './route-driver/route-driver.service';
import { RouteDriverGateway } from './route-driver/route-driver.gateway';

@Module({
  imports: [MapsModule],
  controllers: [RoutesController],
  providers: [RoutesService, RouteDriverService, RouteDriverGateway],
})
export class RoutesModule {}
