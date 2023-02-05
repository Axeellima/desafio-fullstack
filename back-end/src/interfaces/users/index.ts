export interface IUser {
  name: string;
  email: string;
  phone: string;
}

export interface IUserUpdate {
  name?: string;
  email?: string;
  phone?: string;
}
