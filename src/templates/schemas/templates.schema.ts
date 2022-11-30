import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TemplatesDocument = Templates & Document;

@Schema()
export class Templates {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  npmName: string;

  @Prop({ required: true })
  version: string;

  @Prop()
  completedAt?: Date;

  @Prop({ required: true })
  createdAt: Date;

  @Prop()
  deletedAt?: Date;
}

export const TemplatesSchema = SchemaFactory.createForClass(Templates);
