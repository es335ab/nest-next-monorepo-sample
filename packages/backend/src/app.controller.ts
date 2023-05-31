import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags, ApiParam, ApiResponse } from '@nestjs/swagger';

@Controller()
@ApiTags()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id')
  @ApiParam({
    name: 'id',
    type: Number,
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'xxxxx',
    type: String,
  })
  getHello(@Param('id') id: string): string {
    return this.appService.getHello(id);
  }
}
