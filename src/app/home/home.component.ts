import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  row1: any[] = ['assets/rows/row1-1.webp',
                     'assets/rows/row1-2.jpg',
                     'assets/rows/row1-3.webp',
                     'assets/rows/row1-4.webp',
                     'assets/rows/row1-5.webp',
                     'assets/rows/row1-6.webp',
                     'assets/rows/row1-7.webp',
                     'assets/rows/row1-8.webp',
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
