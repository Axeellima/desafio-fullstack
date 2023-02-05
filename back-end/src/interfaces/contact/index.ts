import { IUser } from "./../users/index";

export interface IContact {
  name: string;
  email: string;
  phone: string;
}

export interface IContactUpdate {
  name?: string;
  email?: string;
  phone?: string;
}
