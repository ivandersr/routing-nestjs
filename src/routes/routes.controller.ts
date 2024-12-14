import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RoutesService } from './routes.service';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { RouteDriverService } from './route-driver/route-driver.service';

@Controller('routes')
export class RoutesController {
  constructor(
    private readonly routesService: RoutesService,
    private routeDriverService: RouteDriverService,
  ) {}

  @Post()
  async create(@Body() createRouteDto: CreateRouteDto) {
    return await this.routesService.create(createRouteDto);
  }

  @Post(':id/process-route')
  async processRoute(
    @Param('id') id: string,
    @Body() payload: { lat: number; lng: number },
  ) {
    return await this.routeDriverService.processRoute({
      route_id: id,
      ...payload,
    });
  }

  @Post(':id/start')
  async startRoute(@Param('id') id: string) {
    return await this.routesService.startRoute(id);
  }

  @Get()
  findAll() {
    return this.routesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.routesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRouteDto: UpdateRouteDto) {
    return this.routesService.update(id, updateRouteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.routesService.remove(id);
  }
}
