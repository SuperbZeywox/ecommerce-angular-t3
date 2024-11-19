
export interface IState {
  id: number;
  name: string;
}

export class State implements IState {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

}


