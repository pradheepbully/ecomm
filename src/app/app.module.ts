import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { HttpModule } from '@angular/http';
import { ViewComponent } from './view/view.component';
import { HttpClientModule } from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { DealOfTheDayComponent } from './deal-of-the-day/deal-of-the-day.component';
import { InterceptorModule } from './interceptor/interceptor.module';
import { FilterDealsService } from './filter-deals.service';
import { SearchComponent } from './search/search.component';

import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    FooterComponent,
    ViewComponent,
    DealOfTheDayComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    InterceptorModule,
    NgxPaginationModule
  ],
  providers: [FilterDealsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
