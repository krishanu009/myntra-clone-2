import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent {

  @Input() product: any;

  // product = {src:"assets/product/wtshirt2.jpg", name:"Men Regular Fit Shirt", brand:"Roadstar", price:'984'};
  
mouseOver()
{
  console.log("working");
}

}
