import { Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, SimpleChanges, ViewChildren } from '@angular/core';
import { Subscription } from 'rxjs';
import { CustomFilterObject } from '../custom-filter-object.model';
import { FilterServiceService } from '../services/filter-service.service';

@Component({
  selector: 'app-custom-multi-filter',
  templateUrl: './custom-multi-filter.component.html',
  styleUrls: ['./custom-multi-filter.component.css']
})
export class CustomMultiFilterComponent implements OnInit {





  @ViewChildren("checkboxes") checkboxes: QueryList<ElementRef>
  @Input() filters:any[]=[];
  @Input() title:string="";
  @Input() receivedSelectedValues: any[];
  @Output() selectionChange: EventEmitter<any> = new EventEmitter();
  selectedValues: string[] =[];
  filterOptions: any[]=[];
  searchBar:boolean = false;
  searchInput:string ="";
  selectedValue: string = 'boys';
  modifiedArray: any[];
  private subscription: Subscription;
  constructor(private filterService: FilterServiceService) {}
  // ngOnInit() {    
  //   if (this.filterService.subsVar==undefined) {    
  //     this.filterService.subsVar = this.filterService.invokeUncheck.subscribe((name:any) => {    
  //           this.uncheck(name);
  //     });    
  //   }    
  // }   
 
  ngOnInit(): void {
    this.subscription = this.filterService.invokeUncheck.subscribe((name: any) => {
      this.uncheck(name);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnChanges(): void {
    // console.log(this.filters);
    this.filterOptions = [];
    for(let i=0; i<this.filters.length; i++)
    {
          this.filterOptions.push(new CustomFilterObject(this.filters[i],false));
    }
    console.log(this.receivedSelectedValues);
    this.receivedSelectedValues.forEach( (item) => {
      let index=-1;
       index = this.filterOptions.findIndex(element => element.option === item.value);
      //  console.log(item.value);
      if(index!=-1)
      {
        this.checkValue(index);
      }
    }

    );
}
Search()
{
  this.searchBar=!this.searchBar;
  this.searchInput="";
  
}
 
  // filterOptions: any[]=[{option:'valu1',selected:false},{option:'valu1',selected:false},{option:'valu2',selected:false},{option:'valu3',selected:false}]
  checkValue(event:any)
  {
    
    if(this.filterOptions[event].selected===false)
    {
      let index = this.selectedValues.findIndex(element => element === this.filterOptions[event].option);
      this.selectedValues.splice(index,1);
      this.selectionChange.emit({option: this.filterOptions[event].option,operation:"uncheck",type:this.title});
    }
    else{
      this.selectedValues.push(this.filterOptions[event].option);
      this.selectionChange.emit({option: this.filterOptions[event].option,operation:"check",type:this.title});
    }
   
    // console.log(this.selectedValues);
    // console.log(event);
    // console.log(this.selectedValues); 
  }
  
  uncheck(key:any)
  {
    
    let index = this.filterOptions.findIndex(element => element.option === key.value);
    if(index>=0)
    {
      this.filterOptions[index].selected=false;
      this.selectedValues.splice(index,1);
      this.selectionChange.emit({option: this.filterOptions[index].option,operation:"uncheck"});
      //console.log(this.filterOptions);
      this.checkboxes.forEach((element) => {
        if(element.nativeElement.defaultValue===key)
        {
          element.nativeElement.checked = false;
          console.log(element.nativeElement.defaultValue);
        }
             
  });
    }


  }

}
