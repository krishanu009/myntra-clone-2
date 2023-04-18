import { Component, Input, OnInit } from '@angular/core';
import { FilterConfig } from '../filter-config.model';
import { FilterInfo } from '../filter-info.model';
import { ProductFilters } from '../product-filters.model';
import { FilterServiceService } from '../services/filter-service.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

 
  
  products: any[];
  categories:any[];
  brand:any[];
  price:any[];

  constructor(private filterService: FilterServiceService, private dataService: DataService) {}
@Input() selectedValues: any[];
@Input() selectedGenderValueChnage: any;

  ngOnInit(): void {
    console.log(this.selectedValues);
    this.products = this.dataService.populateData('men','',this.selectedValues);
    this.categories = this.dataService.populateFilters('men','categories');
    this.brand = this.dataService.populateFilters('men','brand');
    this.price = this.dataService.populateFilters('men','price');
  }
  // @Input() productCategory:string;
 
  productCategory:string ="Apparel";
  productCount:string = "456";
  searchInput:string ="";
  selectedGenderValue: string = 'Boys';
  searchBar:boolean = false;
  selectedCat: any[] = [];
  selectedPrice: any[] = [];
  selectedBrand: any[] = [];
  defaultSelect:string="male";
  filterTitles: string[]=['CATEGORIES','BRAND','PRICE'];
  chipValues: any[]=[];
  genders:any[]=['Men','Women','Boys','Girls'];
 
  // priceFilterConfig:FilterConfig = new FilterConfig("multi","PRICE","",[]);
  // brandFilterConfig:FilterConfig = new FilterConfig("multi","BRANDS","",[]);
  // genderFilterConfig:FilterConfig = new FilterConfig("radio","","",[]);
  // categoryFilterConfig:FilterConfig = new FilterConfig("multi","CATEGORIES","",this.categories);
  // filterInfo: FilterInfo = new FilterInfo();
  // productFilters:ProductFilters = new ProductFilters(this.categories,this.brand,this.price);

  Search()
{
  this.searchBar=!this.searchBar;
  this.searchInput="";
  
}

filterValuesEmmit(event: any)
{
  // console.log(event);
  
   
}
genderSelection(event:any)
{
  this.selectedGenderValueChnage = event;
  // console.log(this.selectedGenderValueChnage);
  this.products = this.dataService.populateData(this.selectedGenderValueChnage.toLowerCase(),'',this.selectedValues);
  this.categories = this.dataService.populateFilters(this.selectedGenderValueChnage.toLowerCase(),'categories');
  this.brand = this.dataService.populateFilters(this.selectedGenderValueChnage.toLowerCase(), 'brand');
  this.price = this.dataService.populateFilters(this.selectedGenderValueChnage.toLowerCase(), 'price');
  // console.log(this.categories);
}
chipCloseEmitted(event:any)
{
  //  console.log(event);
  let value = this.selectedValues[event];
  this.filterService.onUncheck(value);
  this.selectedValues.splice(event,1);
 
  //  if(this.productFilters.categories.length!=0)
  //  {
  //   if(this.productFilters.categories.includes(value))
  //   {
  //     console.log(this.multiSelect.value);

  //   }
    
  //  }
  
}


selectionChange(event:any)
{
  if(event.operation==='uncheck')
  {
    //  let index;
    // switch(event.type)
    // {
    //   case this.filterTitles[0]:
    //      index = this.selectedCat.findIndex(element => element === event.option);
    //     this.selectedCat.splice(index,1);
    //     break;
    //   case this.filterTitles[1]:
    //     index = this.selectedBrand.findIndex(element => element === event.option);
    //     this.selectedBrand.splice(index,1);
    //     break;
    //   case this.filterTitles[2]:
    //     index = this.selectedPrice.findIndex(element => element === event.option);
    //     this.selectedPrice.splice(index,1);
    //     break;
      
    // }

     let index;
    
      
        index = this.selectedValues.findIndex(element => (element.type === event.type && element.value === event.option));
        this.selectedValues.splice(index, 1);
       

    
    // let index = this.selectedValues.findIndex(element => element === event.option);
    // this.selectedValues.splice(index,1);
    
  }
  else{

    this.selectedValues.push({type:event.type,value:event.option});
    // this.selectedValues.push(event.option);
    
  }
   console.log(this.selectedValues);
  this.products = this.dataService.populateData(this.selectedGenderValueChnage.toLowerCase(),'',this.selectedValues);

}
}
