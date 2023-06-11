import { Component, OnInit, ElementRef, HostListener, ViewChild} from '@angular/core';
import { DataService } from '../services/data.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private dataService: DataService) { }
  @ViewChild('cardContainer') cardContainer!: ElementRef;
  @ViewChild('menuBar') menuBar!: ElementRef;
  
searchInput: String;
searchResults:any[];
showCard = false;

  
  ngOnInit(): void {
  }

 
  casualShirt = JSON.stringify([{type:'CATEGORIES',value:'Casual shirts'}]);
  formalShirt = JSON.stringify([{type:'CATEGORIES',value:'Formal shirts'}]);
  tshirt = JSON.stringify( [{type:'CATEGORIES',value:'T shirt'}]);
  jeans = JSON.stringify( [{type:'CATEGORIES',value:'Jeans'}]);
casualShoes = JSON.stringify( [{type:'CATEGORIES',value:'Casual Shoes'}]);
sweatshirt = JSON.stringify( [{type:'CATEGORIES',value:'Sweatshirt'}]);
sweaters = JSON.stringify( [{type:'CATEGORIES',value:'Sweaters'}]);
suits = JSON.stringify( [{type:'CATEGORIES',value:'suits'}]);
jackets = JSON.stringify( [{type:'CATEGORIES',value:'jackets'}]);
casualTrousers = JSON.stringify( [{type:'CATEGORIES',value:'Casual Trousers'}]);
FormalTrousers = JSON.stringify( [{type:'CATEGORIES',value:'Formal trousers'}]);
shorts = JSON.stringify( [{type:'CATEGORIES',value:'Shorts'}]);
TrackPants = JSON.stringify( [{type:'CATEGORIES',value:'Track Pants'}]);
gtshirt =  JSON.stringify( [{type:'CATEGORIES',value:'T shirts'}]);

searchFilters: any[] =[{name:"casual shirts", link:['/product/Men/Casual Shirts',this.casualShirt] },
{name:"formal shirts", link:['/product/Men/Formal Shirts',this.formalShirt] },
{name:"Men tshirt", link:['/product/Men/T shirt',this.tshirt] },
{name:"Men Jeans", link:['/product/Men/Jeans',this.jeans] },
{name:"casual shoes", link:['/product/Men/Casual shoes',this.casualShoes] },
{name:"Girl tshirts", link:['/product/Girls/T shirts',this.gtshirt] }]
  shadowDiv ='none';
  
  hover1 = false;
  content1= false;

  hover: any[] = [false,false,false,false,false,false];
  content: any[] = [false,false,false,false,false,false];
  hoverItem(event: any) {
    this.shadowDiv = 'block';
    this.hover1 =true;
    
  const target = event.target as HTMLElement;
  let id = target.id;
  id= id.slice(4);
  this.hover[id] = true;
  // console.log(this.hover[id]);
  }
  itemOut()
  {
    this.shadowDiv = 'none';
    this.hover1 =false;
    this.hover.fill(false);
    this.content.fill(false);
  }
  contentHover(event : any)
  {
    //  this.content1 = true;
    //  console.log("content 1 " + this.content1);
  this.content[event] = true;
  this.shadowDiv = 'block';
  // console.log(this.content);
  }
  contentOut(event: any)
  {
    //  this.content1 = false;
    //  console.log("content 1 " + this.content1);
    this.content[event] = false;
    this.shadowDiv = 'none';
    this.hover.fill(false);
    this.content.fill(false);
  // console.log(this.content);
  }
  hideElement()
  {
    this.shadowDiv = 'none';
  }
  clicked()
  {
    this.hover.fill(false);
    this.content.fill(false);
  }
  searchClicked()
  {
    this.searchInput="";
    this.searchResults =[];
  }
  searching(event)
  {

    // if(this.searchInput.length>=3)
    // {
    //   this.searchResults = this.dataService.searchData(this.searchInput);
    // }
    // else
    // {
    //   this.searchResults =[];
    // }

    if(this.searchInput.length>=3)
    {
      
      this.searchResults = this.searchFilters.filter(item=>item.name.toLowerCase().includes(this.searchInput.toLowerCase()));
      
      console.log(this.searchResults);
    }
    else
    {
      this.searchResults =[];
    }

    // console.log(this.searchInput);
    
    
  }
  menuClick()
  {
    console.log("clicked");
    this.showCard = !this.showCard;
  }
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.showCard && !this.cardContainer.nativeElement.contains(event.target) && !this.menuBar.nativeElement.contains(event.target)) {
      this.menuClick();
    }
  }
}
