import {IDesktop} from './desktop.model';
import {IPhone} from './phone.model';

export interface ISearchGroup1 {
  Desktop: IDesktop[];
  Phone: IPhone[];
}

export class SearchGroup1 implements ISearchGroup1 {
  Desktop: IDesktop[]=[];
  Phone: IPhone[]=[];


  constructor() {
  }
}
