// product.dto.ts
import { ApiProperty } from '@nestjs/swagger'; 
import { IsNotEmpty, IsEnum } from 'class-validator';
import { Size } from './product.enum';
import { Transform } from 'class-transformer';

// enum Size {
//     SMALL = 'small',
//     MEDIUM = 'medium',
//     LARGE = 'large',
//   }

export class ProductDto {
 
    @ApiProperty({ description: 'Product_type' })
    @IsNotEmpty() 
    Product_type: string;
    
    @ApiProperty({ description: 'name' })
    @IsNotEmpty() 
    name: string;

    @ApiProperty({ description: 'adminId' })
    @IsNotEmpty() 
    adminId:string;
    
    @ApiProperty({ description: 'description' })
    description: string;
    
    @ApiProperty({ description: 'price' })
    @IsNotEmpty()
    price: number;
    
    @ApiProperty({ description: 'category' })
    category: string;

    @ApiProperty({ description: 'brand' })
    brand: string;
    
    @ApiProperty({ description: 'stockQuantity' })
    @IsNotEmpty()
    stockQuantity: number;
     
    @ApiProperty({ description: '[images]' })
    images: string[];
     
    @ApiProperty({ description:'[large,medium,small]' ,enum: Size })
    @IsEnum(Size)
    size: Size;
     
    @ApiProperty({ description: '[rating]' })
    rating: number; 

    @ApiProperty({ description: 'reviews' })
    reviews: string[];
    
    @ApiProperty({ description: 'availability'})
    @IsNotEmpty() 
    availability: string; 
        
    @ApiProperty({ description: 'createdAt' })
    createdAt: Date
   
    @ApiProperty({ description: 'updatedAt'})
    updatedAt: Date;
    timestamp: true;

}