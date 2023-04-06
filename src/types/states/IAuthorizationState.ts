import { IUser } from "../models/IUser";

export interface IAuthorizationState {
  loading: boolean;
  admin: boolean;
  student: boolean;
  prepod: boolean;
  error: string;
  isAuthorized: boolean;
  user: IUser;
}