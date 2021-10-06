import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';


const materialComponents=[
  CommonModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRippleModule,
  MatToolbarModule
]

@NgModule({
  declarations: [],
  imports: [materialComponents],
  exports:[materialComponents]
})
export class MaterialModule { }
