import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
menProd = JSON.stringify( [{type:'PRICE',value:'1000'}]);
menProd2 = JSON.stringify( [{type:'PRICE',value:'2000'}]);
menProd3 = JSON.stringify( [{type:'PRICE',value:'1500'}]);
menProd4 = JSON.stringify( [{type:'PRICE',value:'500'}]);
casualShoes = JSON.stringify( [{type:'CATEGORIES',value:'Casual Shoes'}]);
  ngOnInit(): void {
  }
  images = ['assets/slider1.webp',
            'assets/slider2.webp',
            'assets/slider3.webp',
            'assets/slider4.webp',
            'assets/slider5.webp',
            'assets/slider6.webp']
  // row1: any[] = ['assets/rows/row1-1.webp',
  //                    'assets/rows/row1-2.jpg',
  //                    'assets/rows/row1-3.webp',
  //                    'assets/rows/row1-4.webp',
  //                    'assets/rows/row1-5.webp',
  //                    'assets/rows/row1-6.webp',
  //                    'assets/rows/row1-7.webp',
  //                    'assets/rows/row1-8.webp',
  //                   ];
  
                    row1: any[] = [{src:'assets/rows/row1-1.webp',link:['/product/Men/Clothing',this.menProd]},
                     {src:'assets/rows/row1-2.jpg',link:['/product/Men/Casual shoes',this.casualShoes]},
                     {src:'assets/rows/row1-3.webp',link:['/product/Men/Casual shoes',this.casualShoes]},
                     {src:'assets/rows/row1-4.webp',link:['/product/Men/Casual shoes',this.casualShoes]},
                     {src:'assets/rows/row1-5.webp',link:['/product/Men/Clothing',this.menProd2]},
                     {src:'assets/rows/row1-6.webp',link:['/product/Men/Clothing',this.menProd3]},
                     {src:'assets/rows/row1-7.webp',link:['/product/Men/Clothing',this.menProd4]},
                     {src:'assets/rows/row1-8.webp',link:['/product/Men/Clothing',this.menProd]}
                    ];
 row2: any[] = ['assets/rows/row2-1.webp',
                    'assets/rows/row2-2.webp',
                    'assets/rows/row2-3.webp',
                    'assets/rows/row2-4.webp',
                    'assets/rows/row2-5.webp',
                    'assets/rows/row2-6.webp',
                    'assets/rows/row2-7.webp',
                    'assets/rows/row2-8.webp',
                    'assets/rows/row2-9.webp',
                    'assets/rows/row2-10.webp',
                    'assets/rows/row2-11.webp',
                    'assets/rows/row2-12.webp',
                    'assets/rows/row2-13.webp',
                    'assets/rows/row2-14.webp',
                    'assets/rows/row2-15.webp',
                    'assets/rows/row2-16.webp',
                   ];
row3: any[] =['assets/rows/row3-1.webp',
              'assets/rows/row3-2.webp',
              'assets/rows/row3-3.webp',
              'assets/rows/row3-4.webp',
              'assets/rows/row3-5.webp',
              'assets/rows/row3-6.webp',
              'assets/rows/row3-7.webp',];
row4: any[] =['assets/rows/row4-1.webp',
              'assets/rows/row4-2.webp',
              'assets/rows/row4-3.webp',
              'assets/rows/row4-4.webp',
              'assets/rows/row4-5.webp',
              'assets/rows/row4-6.webp',
              'assets/rows/row4-7.webp',
              'assets/rows/row4-8.webp',
              'assets/rows/row4-9.webp',
              'assets/rows/row4-10.webp',
              'assets/rows/row4-11.webp',
              'assets/rows/row4-12.webp',
              'assets/rows/row4-13.webp',
              'assets/rows/row4-14.webp',
              'assets/rows/row4-15.webp',
              'assets/rows/row4-16.webp',
            ];
//@ts-ignore
items: MenuItem[];

    


}
