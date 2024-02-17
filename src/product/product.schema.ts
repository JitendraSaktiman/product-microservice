import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber, IsUrl, IsArray, IsOptional, IsEnum } from 'class-validator';
import { Size } from './product.enum';


@Schema()
export class ProductModel {

    @Prop({ required: true })
    @IsNotEmpty()
    @IsString()
    Product_type: string;
    
    @Prop({ required: true })
    @IsNotEmpty()
    @IsString()
    name: string;

    @Prop({ required: true })
    @IsNotEmpty()
    @IsString()
    adminId: string;
    
    @Prop({ required: true })
    @IsString()
    @IsOptional()
    description: string;
    
    @Prop({ required: true })
    @IsNotEmpty()
    @IsNumber()
    price: number;
    
    @Prop({ required: true })
    @IsString()
    @IsOptional()
    category: string;
    
    @Prop({ required: true })
    @IsString()
    @IsOptional()
    brand: string;
    
    @Prop({ required: true })
    @IsNotEmpty()
    @IsNumber()
    stockQuantity: number;
    
    @IsArray()
    @IsUrl({}, { each: true })
    images: string[];
    
    @Prop({ required: true })
    @IsEnum(Size)
    size: Size;
    
    @Prop({ required: true })
    @IsNumber()
    @IsOptional()
    rating: number;
    
    @Prop({ required: true })
    @IsArray()
    @IsOptional()
    reviews: string[];
    
    @Prop({ required: true })
    @IsNotEmpty()
    @IsString()
    availability: string; 
       
    @Prop({ default: Date.now })
    @ApiProperty({ default: Date.now })
    createdAt: Date;

    @Prop({ default: Date.now })
    @ApiProperty({ default: Date.now })
    updatedAt: Date;

}

export const ProductSchema = SchemaFactory.createForClass(ProductModel);