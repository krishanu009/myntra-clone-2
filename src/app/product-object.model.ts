export class ProductObject {

    public name: string;
    public category: string;
    public brand: string;
    public price: string;
    public src: string;

    constructor(name: string, category: string, brand: string, price: string, src: string)
    {
       this.brand = brand;
       this.name = name;
       this.category = category;
        this.price = price;
        this.src = src;
    }
}
