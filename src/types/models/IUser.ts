import { userDataField } from "../userDataField";

export interface IUser {
  email: userDataField;
  id?: userDataField;
  password?: userDataField;
  role?: userDataField;
}