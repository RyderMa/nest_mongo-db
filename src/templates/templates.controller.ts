import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTemplatesDto } from './dto/create-templates.dto';
import { UpdateTemplatesDto } from './dto/update-templates.dto';
import { TemplatesService } from './templates.service';

@Controller('templates')
export class TemplatesController {
  constructor(private readonly service: TemplatesService) {}

  @Get()
  async index() {
    return await this.service.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: string) {
    return await this.service.findOne(id);
  }

  @Post()
  async create(@Body() createTemplatesDto: CreateTemplatesDto) {
    return await this.service.create(createTemplatesDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTemplatesDto: UpdateTemplatesDto,
  ) {
    return await this.service.update(id, updateTemplatesDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.service.delete(id);
  }
}
