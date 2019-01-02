import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DealOfTheDayComponent } from './deal-of-the-day/deal-of-the-day.component';
import { SearchComponent } from './search/search.component';
import { BannerComponent } from './banner/banner.component';
const routes: Routes = [
  {
    path:'',
    component:BannerComponent
  },
  {
    path:'results',
    component:SearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
