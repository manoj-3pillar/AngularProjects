export interface IPropertyBase {
  Id: number;
  SellRent: number;
  Name: string;
  PType: number;
  BHK: number;
  FType: number;
  Price: number;
  BuiltArea: number;
  CarpetArea?: number;
  Address?: string;
  Address2?: string;
  City: string;
  FloorNo: number;
  TotalFloor: number;
  RTM: boolean;
  AOP: number;
  MainEnterance?: string;
  Security?: number;
  Gated?: boolean;
  Maintenance?: number;
  Possession?: string;
  ImgPath?: string;
  Description?: string;
  PostedOn?: string;
  PostedBy?: number;
}
