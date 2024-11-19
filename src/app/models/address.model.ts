import {state} from '@angular/animations';

export interface IAddress {
  street: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
}

export class Address implements IAddress{
  city: string;
  country: string;
  state: string;
  street: string;
  zipCode: string;

  constructor(city: string, country: string, state: string, street: string, zipCode: string) {
    this.city = city;
    this.country = country;
    this.state = state;
    this.street = street;
    this.zipCode = zipCode;
  }
}
