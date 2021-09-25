import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';



const routes: Routes=[
  
  {path:'', component: HomeComponent},
  {path:"about", component: AboutComponent},
  {path:"contact", component: ContactComponent},
  {path:"student", component: StudentComponent},
  {path:"student/:1", component: StudentComponent},
  {path:"student/:2", component: StudentComponent},
  


  




];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
