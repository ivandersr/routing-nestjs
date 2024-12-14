import { Controller, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { KafkaContext } from 'src/kafka/kafka-context';
import { RoutesService } from './routes.service';

@Controller()
export class RoutesConsumer {
  private logger = new Logger(RoutesConsumer.name);
  constructor(private routesService: RoutesService) {}
  @MessagePattern('freight')
  async updateFreight(payload: KafkaContext) {
    this.logger.log(`Received message: ${JSON.stringify(payload)}`);
    const { route_id: routeId, amount: freight } = payload.messageValue;
    await this.routesService.update(routeId, { freight });
  }
}