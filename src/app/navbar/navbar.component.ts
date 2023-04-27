import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
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
  console.log(this.hover[id]);
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
  console.log(this.content);
  }
  contentOut(event: any)
  {
    //  this.content1 = false;
    //  console.log("content 1 " + this.content1);
    this.content[event] = false;
    this.shadowDiv = 'none';
    this.hover.fill(false);
    this.content.fill(false);
  console.log(this.content);
  }
  hideElement()
  {
    this.shadowDiv = 'none';
  }
}
