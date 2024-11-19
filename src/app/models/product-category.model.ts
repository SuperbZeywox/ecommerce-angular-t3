
export interface IProductCategory {
  id: number;
  categoryName: string;
}

export class ProductCategory implements IProductCategory {
  id: number;
  categoryName: string;


  constructor(id: number, categoryName: string) {
    this.id = id;
    this.categoryName = categoryName;
  }
}
