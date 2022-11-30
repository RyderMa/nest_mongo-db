import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTemplatesDto } from './dto/create-templates.dto';
import { UpdateTemplatesDto } from './dto/update-templates.dto';
import { Templates, TemplatesDocument } from './schemas/templates.schema';

@Injectable()
export class TemplatesService {
  constructor(
    @InjectModel(Templates.name)
    private readonly model: Model<TemplatesDocument>,
  ) {}

  async findAll(): Promise<Templates[]> {
    return await this.model.find().exec();
  }

  async findOne(id: string): Promise<Templates> {
    return await this.model.findById(id).exec();
  }

  async create(createTemplatesDto: CreateTemplatesDto): Promise<Templates> {
    return await new this.model({
      ...createTemplatesDto,
      createdAt: new Date(),
    }).save();
  }

  async update(
    id: string,
    updateTemplatesDto: UpdateTemplatesDto,
  ): Promise<Templates> {
    return await this.model.findByIdAndUpdate(id, updateTemplatesDto).exec();
  }

  async delete(id: string): Promise<Templates> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
