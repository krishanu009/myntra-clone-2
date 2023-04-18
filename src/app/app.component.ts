import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myntra-clone-2';

  Gender: string = 'Men';
  selectedValues: any[]=[{type:'CATEGORIES',value:'Casual shirts'}];
}
