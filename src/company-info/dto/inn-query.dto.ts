import { IsNotEmpty, IsNumberString, Length } from 'class-validator';

export class InnQueryDto {
  @IsNumberString()
  @IsNotEmpty()
  @Length(1, 15)
  query: string;
}
