import {MatButtonModule, MatCheckboxModule, MatCardModule, MatSnackBarModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule,MatCardModule,MatSnackBarModule,MatGridListModule,MatProgressSpinnerModule],
  exports: [MatButtonModule, MatCheckboxModule,MatCardModule,MatSnackBarModule,MatGridListModule,MatProgressSpinnerModule],
})
export class MaterialModule { }