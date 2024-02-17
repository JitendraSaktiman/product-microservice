import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';

export enum Size {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
  }