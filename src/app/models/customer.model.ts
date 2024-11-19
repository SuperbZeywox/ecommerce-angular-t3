import {Role} from '../data/role.enum';

export interface ICustomer {
  id: number | undefined,

  firstName: string;
  lastName: string;
  email: string;

  accountNumber:string;
  balance: number;
  username:string;
  password:string;
  createdTime: Date;
  role:Role;
  token:string;
}
export class Customer implements ICustomer{
  id: number | undefined;

  firstName: string="";
  lastName: string="";
  email: string="";

  accountNumber:string="";
  balance: number=0;
  username:string="";
  password:string="";
  createdTime: Date= new Date();
  role:Role = Role.USER;
  token:string = "";

  // constructor(id: number | undefined, firstName: string, lastName: string, email: string, accountNumber: string, balance: number, username: string, password: string, createdTime: Date, role: Role, token: string) {
  //   this.id = id;
  //   this.firstName = firstName;
  //   this.lastName = lastName;
  //   this.email = email;
  //   this.accountNumber = accountNumber;
  //   this.balance = balance;
  //   this.username = username;
  //   this.password = password;
  //   this.createdTime = createdTime;
  //   this.role = role;
  //   this.token = token;
  // }

// email: string;
  // firstName: string;
  // lastName: string;
  //
  // constructor(email: string, firstName: string, lastName: string) {
  //   this.email = email;
  //   this.firstName = firstName;
  //   this.lastName = lastName;
  // }

}
