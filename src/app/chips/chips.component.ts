import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.css']
})
export class ChipsComponent {

  @Input() values:any[];
  @Output() chipEmitter: EventEmitter<any> = new EventEmitter();
  Close(index:any)
  {

    this.chipEmitter.emit(index);
    // this.values.splice(index,1);
    
  }

}
