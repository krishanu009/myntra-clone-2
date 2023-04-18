import { Injectable } from '@angular/core';
import { ProductObject } from '../product-object.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  genders:any[]=['Men','Women','Boys','Girls'];
  //Men 
  menProducts: any[] = [
    {src:"assets/product/wtshirt2.jpg", name:"Men Regular Fit Shirt", brand:"Roadstar", price:'984', category:'Casual shirts'},
    {src:"assets/product/redshirt2.jpg", name:"Men Regular Fit Shirt", brand:"U.S Polo Assn", price:'700', category:'Casual shirts'}, 
    {src:"assets/product/wtshirt2.jpg", name:"Men Regular Fit Shirt", brand:"U.S Polo Assn", price:'1000',category:'Casual shirts'},
    {src:"assets/product/shirt3.jpg", name:"Men Regular Fit Shirt", brand:"Highlander", price:'1400',category:'Casual shirts'},
    {src:"assets/product/halfshirt.webp", name:"Men Regular Fit Shirt", brand:"Highlander", price:'984',category:'Casual shirts'},
    {src:"assets/product/jeans1.webp", name:"Casual Jeans", brand:"Roadstar", price:'1984',category:'Jeans'},
    {src:"assets/product/jeans2.webp", name:"Men grey jeans", brand:"Livis", price:'870',category:'Jeans'},
    {src:"assets/product/jeans3.jpg", name:"Ripped Jeans", brand:"Killer Jeans", price:'2989',category:'Jeans'},
    {src:"assets/product/jeans3.jpg", name:"Ripped Jeans", brand:"Roadstar", price:'1600',category:'Jeans'},
    {src:"assets/product/jeans4.jpg", name:"Ripped Jeans", brand:"Roadstar", price:'999',category:'Jeans'},
    {src:"assets/product/jeans5.webp", name:"Faded Jeans", brand:"Livis", price:'3500',category:'Jeans'},
    {src:"assets/product/jeans6.jpg", name:"Men Washed Jeans", brand:"Livis", price:'789',category:'Jeans'},
    {src:"assets/product/jeans7.jpg", name:"Washed Jeans", brand:"Roadstar", price:'1900',category:'Jeans'},
    {src:"assets/product/cas1.jpg", name:"Men Casual Shoe", brand:"Campus", price:'589',category:'Casual Shoes'},
    {src:"assets/product/cas2.jpg", name:"White sneekers", brand:"Sparx", price:'1799',category:'Casual Shoes'},
    {src:"assets/product/cas3.jpg", name:"Casual shoe", brand:"ADIDAS", price:'1300',category:'Casual Shoes'},
    {src:"assets/product/cas4.jpg", name:"Campus shoes", brand:"Campus", price:'699',category:'Casual Shoes'},
    {src:"assets/product/ss1.webp", name:"Campus shoes", brand:"Campus", price:'899',category:'Sports Shoes'},
    {src:"assets/product/ss2.webp", name:"Sports Shoes", brand:"ADIDAS", price:'3699',category:'Sports Shoes'},
    {src:"assets/product/ss3.webp", name:"Runnign Shoes", brand:"Sparx", price:'1400',category:'Sports Shoes'},
    {src:"assets/product/ss4.webp", name:"Campus shoes", brand:"Campus", price:'999',category:'Sports Shoes'},
    {src:"assets/product/ss5.webp", name:"Sports Shoes", brand:"Sparx", price:'1299',category:'Sports Shoes'},
    ];
 
  menCategories:any[]= ['Casual Shoes','Sports Shoes','Flip Flops','Formal Shoes','Sandals','Casual shirts','Jeans'];
  menBrand:any[] =['Puma','FAUSTO','Campus','ADIDAS','Sparx','U.S Polo Assn','Red Chief','Roadstar','Highlander','Livis',"Killer Jeans"];
  menPrice:any[] = ['Rs.111 to Rs. 7853','Rs.7853 to Rs,15055','Rs.15055 to Rs.22527','Rs.22527 to 29999'];
  // girl 

  girlProducts: any[] = [
    {src:"assets/product/girlsblack.jpeg", name:"Black T-shirt", brand:"Campus", price:'999',category:'T shirts'},
    {src:"assets/product/girlthsirt2.jpg", name:"Girls T-Shirt", brand:"PinkVilla", price:'1699',category:'T shirts'},
    {src:"assets/product/girltshirtblue.jpg", name:"Girls Blue T-shirt", brand:"PinkVilla", price:'699',category:'T shirts'},
    {src:"assets/product/girltshirtred.jpg", name:"Red T-Shirt", brand:"Campus", price:'489',category:'T shirts'},
    ];

    girlCategories:any[]= ['T shirts','Heels','Flats','Jeens','Flip Flops','Formal Shoes','Sandals'];
  girlBrand:any[] =['PinkVilla','FAUSTO','Campus','ADIDAS','Sparx','U.S Polo Assn','Red Chief'];
  girlPrice:any[] = ['Rs.111 to Rs. 7853','Rs.7853 to Rs,15055','Rs.15055 to Rs.22527','Rs.22527 to 29999'];
  // sortFunction(arr:any[],filters:any[])
  // {

  // }
  populateData(gender: any, category: any, selectdValues: any[]): any
  {
    let filteredProducts: any[] =[];
    
    if(gender === 'men')
    {
// console.log(selectdValues);
      if(selectdValues.length==0)
      { 
        return this.menProducts;
      }
      else{
// console.log(selectdValues);
        // this.menProducts.forEach( (prod) => {
        //   selectdValues.forEach( (sel) => {
        //     console.log(prod.values(sel));
            
        //   })
          
        // }
          
        // )
        //category filter
         
        let count = 0 ;
        selectdValues.forEach( 
          (values) => {
            
            if(values.type === 'CATEGORIES')
            {
              count++;
              if(count==1)
              {
                filteredProducts = this.menProducts.filter(item => item.category === values.value );
              }
              else{
                filteredProducts =filteredProducts.concat(this.menProducts.filter(item => item.category === values.value )) ;
              }
              
            }
            
          }
        )
        if(count == 0)
        {
          filteredProducts = this.menProducts;
        }
        else{
          count = 0;
        }
      //brand Filter
      selectdValues.forEach( 
        (values) => {

          if(values.type === 'BRAND')
          {
            count++;
            if(count == 1)
              {
                filteredProducts = filteredProducts.filter(item => item.brand === values.value );
              }
              else{
                filteredProducts =filteredProducts.concat(this.menProducts.filter(item => item.brand === values.value )) ;
              }
            
          }
          
        }
      )

       //price Filter
       count = 0;
       selectdValues.forEach( 
        (values,index) => {

          if(values.type === 'PRICE')
          {
            count ++;
            if(count == 1)
              {
                filteredProducts = filteredProducts.filter(item => item.price === values.value );
              }
              else{
                filteredProducts = filteredProducts.concat(this.menProducts.filter(item => item.price === values.value )) ;
              }
            
          }
          
        }
      )
        // selectdValues.forEach( 
        //   (values) => {
        //     filteredProducts =  filteredProducts.concat(this.menProducts.filter(item => Object.values(item).includes(values)));
        //   }
        // )
      }
      return filteredProducts;
    }
    else if(gender === 'girls')
    {
      // console.log(selectdValues);
      if(selectdValues.length==0)
      { 
        return this.girlProducts;
      }
      else{
// console.log(selectdValues);
        // this.menProducts.forEach( (prod) => {
        //   selectdValues.forEach( (sel) => {
        //     console.log(prod.values(sel));
            
        //   })
          
        // }
          
        // )
        //category filter
         
        let count = 0 ;
        selectdValues.forEach( 
          (values) => {
            
            if(values.type === 'CATEGORIES')
            {
              count++;
              if(count==1)
              {
                filteredProducts = this.girlProducts.filter(item => item.category === values.value );
              }
              else{
                filteredProducts =filteredProducts.concat(this.girlProducts.filter(item => item.category === values.value )) ;
              }
              
            }
            
          }
        )
        if(count == 0)
        {
          filteredProducts = this.girlProducts;
        }
        else{
          count = 0;
        }
      //brand Filter
      selectdValues.forEach( 
        (values) => {

          if(values.type === 'BRAND')
          {
            count++;
            if(count == 1)
              {
                filteredProducts = filteredProducts.filter(item => item.brand === values.value );
              }
              else{
                filteredProducts =filteredProducts.concat(this.menProducts.filter(item => item.brand === values.value )) ;
              }
            
          }
          
        }
      )

       //price Filter
       count = 0;
       selectdValues.forEach( 
        (values,index) => {

          if(values.type === 'PRICE')
          {
            count ++;
            if(count == 1)
              {
                filteredProducts = filteredProducts.filter(item => item.price === values.value );
              }
              else{
                filteredProducts = filteredProducts.concat(this.menProducts.filter(item => item.price === values.value )) ;
              }
            
          }
          
        }
      )
        // selectdValues.forEach( 
        //   (values) => {
        //     filteredProducts =  filteredProducts.concat(this.menProducts.filter(item => Object.values(item).includes(values)));
        //   }
        // )
      }
      return filteredProducts;
    }
  }

  populateFilters(gender:string, key: string): any{
    switch(gender)
    {
      case 'men':
      switch(key)
      {
         case 'categories':
          return this.menCategories;
        case 'brand':
          return this.menBrand;
        case 'price':
          return this.menPrice;
      }
      break;
      case 'girls':
      switch(key)
      {
         case 'categories':
          return this.girlCategories;
        case 'brand':
          return this.girlBrand;
        case 'price':
          return this.girlPrice;
      }
      break;
    }
  }

}
