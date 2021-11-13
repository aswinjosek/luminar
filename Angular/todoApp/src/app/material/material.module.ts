import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatRippleModule,MAT_DATE_LOCALE} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';





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
  MatToolbarModule,
  MatListModule,


  
]

@NgModule({
  declarations: [],
  imports: [materialComponents],
  exports:[materialComponents],
  providers:[{provide: MAT_DATE_LOCALE, useValue: 'en-IN'}]
})

export class MaterialModule { }

