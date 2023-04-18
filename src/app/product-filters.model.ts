export class ProductFilters {



    public categories:string[]=[];
    public brand:string[]=[];
    public price:string[]=[];

    constructor(categories:string[],brand:string[],price:string[])
    {
      this.brand=brand;
      this.categories=categories;
      this.price=price;
    }
}