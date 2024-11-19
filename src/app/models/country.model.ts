
export interface ICountry {
  id: number;
  code: string;
  name: string;
}

export class Country implements ICountry {
  code: string;
  id: number;
  name: string;

  constructor(code: string, id: number, name: string) {
    this.code = code;
    this.id = id;
    this.name = name;
  }

}
