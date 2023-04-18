import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChipsComponent } from './chips/chips.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomMultiFilterComponent } from './custom-multi-filter/custom-multi-filter.component';
import { CustomRadioComponent } from './custom-radio/custom-radio.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ChipsComponent,
    CustomMultiFilterComponent,
    CustomRadioComponent,
    HomeComponent,
    ProductComponent,
    ProductViewComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
