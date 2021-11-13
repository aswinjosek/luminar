import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TodoViewComponent } from './todo-view/todo-view.component';

const routes: Routes = [{path:'',component:LoginComponent},
                        {path:'register',component:RegisterComponent},
                        {path:'viewtodo',component:TodoViewComponent},
                        {path:'addtodo',component:AddTodoComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
