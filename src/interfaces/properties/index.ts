import { DeepPartial } from "typeorm";
import { Category } from "../../entities/categories.entity";

export interface IAddressRequest {
  district: string;
  zipCode: string;
  number?: string;
  city: string;
  state: string;
}

export interface IPropertyRequest {
  value: number;
  size: number;
  address: IAddressRequest;
  categoryId: string;
  category?: any;
}
// export interface IPropertyRequestVerify {
//   value: number;
//   size: number;
//   address: IAddressRequest;
//   categoryId: string;
// }
