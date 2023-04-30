import { EventEmitter, Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterServiceService {

  invokeUncheck = new EventEmitter();    
  subsVar: Subscription;    
    
  constructor() { }    
    
  onUncheck(event:any) {    
    this.invokeUncheck.emit(event);
    // console.log(event);    
  }    
}
