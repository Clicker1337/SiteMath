import {userDataField} from '../userDataField';

export interface IUser {
    login: userDataField;
    userId?: userDataField;
  password?: userDataField;
    roles: Iroles[];
    patronymic?: userDataField;
    nameUser?: userDataField;
    surname?: userDataField;
}
interface Iroles {
    roleId: number;
    name: string;
}
