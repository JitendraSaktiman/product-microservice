import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { plainToClass } from 'class-transformer';
import { ApiBearerAuth} from '@nestjs/swagger';
import { ProductDto} from './product.dto';
import { ProductModel } from './product.schema';



@Injectable()
@ApiBearerAuth()
export class ProductService {

    constructor(
        private readonly logger:Logger,
        @InjectModel(ProductModel.name) private readonly ProductServiceModel: Model<ProductModel>,
    ){}


    async createCustomerProfile(data: ProductDto): Promise<any> {
        try {
            this.logger.log("Entered into createCustomerProfile",ProductService.name);
            // const checkEmailExist=await this.ProductServiceModel.findOne({}).exec();
       
            const newCustomer = await this.ProductServiceModel.create(data);
    
           return {
                message: 'User created successfully',
                success: true,
                data: newCustomer
            };
        } catch (error) {
           return error.message
        }
    }

}