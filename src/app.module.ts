import { Logger, MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ProductSchema,ProductModel } from './product/product.schema';
import { ProductController } from './product/product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductService } from './product/product.service';
import { AuthenticationMiddleware, AuthorizationMiddleware } from './middleware/middleware';


@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://Shivamgupta:fIffetcE6AVPQRAG@cluster0.hulfv.mongodb.net/e-commerce"),
    MongooseModule.forFeature([{ name: ProductModel.name, schema: ProductSchema }]),
  ],
  controllers: [ProductController],
  providers: [ProductService,Logger],
})


export class AppModule implements NestModule {
  configure(product: MiddlewareConsumer) {
    product
      .apply(AuthenticationMiddleware)
      .exclude({ path: '/product/craeteproduct', method: RequestMethod.POST })
      .forRoutes('*');
    product
   .apply(AuthorizationMiddleware)
      // .forRoutes('*');
  
  
  }
}