import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-radio',
  templateUrl: './custom-radio.component.html',
  styleUrls: ['./custom-radio.component.css']
})
export class CustomRadioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() filters:any[]=[];
  @Input() title:string="";
  @Input() defaultSelect="";
  @Output() genderSelection: EventEmitter<any> = new EventEmitter();
  selectedOption:string;
  ngOnChanges(): void {
    // console.log(this.filters);
    this.selectedOption = this.defaultSelect;
    
}
genderChange()
{
  this.genderSelection.emit(this.selectedOption);
}
}
