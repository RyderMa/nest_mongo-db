import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TemplatesModule } from './templates/templates.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://malujie1:malj123456@cluster0.zfirgih.mongodb.net/?retryWrites=true&w=majority',
      { dbName: 'templates' },
    ),
    TemplatesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
