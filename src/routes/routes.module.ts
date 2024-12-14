import { Module } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { RoutesController } from './routes.controller';
import { MapsModule } from 'src/maps/maps.module';
import { RouteDriverService } from './route-driver/route-driver.service';
import { RouteDriverGateway } from './route-driver/route-driver.gateway';
import { KafkaModule } from 'src/kafka/kafka.module';
import { RoutesConsumer } from './routes.consumer';
import { HttpModule } from '@nestjs/axios';
import { RouteDriverConusmer } from './route-driver/route-driver.consumer';

@Module({
  imports: [MapsModule, KafkaModule, HttpModule],
  controllers: [RoutesController, RoutesConsumer, RouteDriverConusmer],
  providers: [RoutesService, RouteDriverService, RouteDriverGateway],
})
export class RoutesModule {}
