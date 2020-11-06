import { kStringMaxLength } from "buffer";

export interface ICasa {
  Id: number;
  SellRent: number;
  Name: string;
  Type: string;
  Price: number;
  Image?: string;
}
