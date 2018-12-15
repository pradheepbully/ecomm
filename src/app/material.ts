import {MatButtonModule, MatCheckboxModule, MatCardModule, MatSnackBarModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule,MatCardModule,MatSnackBarModule,MatGridListModule],
  exports: [MatButtonModule, MatCheckboxModule,MatCardModule,MatSnackBarModule,MatGridListModule],
})
export class MaterialModule { }