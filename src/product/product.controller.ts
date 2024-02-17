import {
    Body,
    Controller,
    HttpException,
    Logger,
    Post,
    Req,
  } from '@nestjs/common';
  import { ApiOkResponse, ApiTags,ApiBearerAuth } from '@nestjs/swagger';
import { ProductService } from './product.service';
import { ProductDto } from './product.dto';
  
// @ApiBearerAuth()
  @ApiTags('Product')
  @Controller('product')
  export class ProductController {
    constructor(
      private service: ProductService,
      private readonly logger: Logger,
    ) {}
    @Post()
    @ApiOkResponse({description: 'craeteproduct '})
    async createProduct( @Body() createProductReq: ProductDto,): Promise<any> {
      this.logger.log("Request made to create Product");
      try {
        return await this.service.createCustomerProfile(createProductReq);
      } catch (e) {
        this.logger.error(
          `Error occured while creating user :${JSON.stringify(e)}`,
        );
        throw new HttpException('Internal Server Error', 500);
      }
    }
  }
  