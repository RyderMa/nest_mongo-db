import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TemplatesService } from './templates.service';
import { TemplatesController } from './templates.controller';
import { Templates, TemplatesSchema } from './schemas/templates.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Templates.name, schema: TemplatesSchema },
    ]),
  ],
  controllers: [TemplatesController],
  providers: [TemplatesService],
})
export class TemplatesModule {}
