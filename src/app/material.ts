import {MatButtonModule, MatCheckboxModule, MatCardModule, MatSnackBarModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  imports: [MatIconModule,MatButtonModule, MatCheckboxModule,MatCardModule,MatSnackBarModule,MatGridListModule,MatProgressSpinnerModule],
  exports: [MatIconModule,MatButtonModule, MatCheckboxModule,MatCardModule,MatSnackBarModule,MatGridListModule,MatProgressSpinnerModule],
})
export class MaterialModule { }