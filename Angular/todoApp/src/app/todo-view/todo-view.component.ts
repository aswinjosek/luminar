import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.css'],
})
export class TodoViewComponent implements OnInit {
  username: any;
  todos: any;
  objId: any;
  todoId: any;
  todo: any;
  date: any;

  // updateTodoForm = this.fb.group({
  //   todo: ["", [Validators.required]],
  //   date: ["", [Validators.required]],
  // });

  constructor(
    private ds: DataService,
    private fb: FormBuilder,
    private datepipe: DatePipe,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

    this.username = localStorage.getItem('currentUser');
    this.objId = localStorage.getItem('id');

    this.ds.getTodos(this.objId).subscribe(
      (result: any) => {
        if (result) {
          this.todos = result.todos;
          console.log(this.todos);
        }
      },
      (result) => {
        alert(result);
      }
    );
  }

  ngOnInit(): void {}

  todoDelete(todoId: any) {
    this.ds.todoDelete(this.objId, todoId).subscribe((result: any) => {
      if (result) {
        // alert(result.message);

        window.location.reload();
      }
    });
  }

  update(todo: any, date: any, id: any) {
    this.todo = todo;

    // this.date = this.datepipe.transform(date,'yyyy/MM/dd');
    // this.date=date.toLocaleDateString("af-ZA")
    this.date=date;
    
    // console.log(this.date);

    this.todoId = id;
  }

  todoUpdate() {
    var updatedTodo = this.todo;
    var updatedDate = this.date;

    // if(this.updateTodoForm.valid){
    this.ds
      .todoUpdate(this.objId, this.todoId, updatedTodo, updatedDate)
      .subscribe(
        (result: any) => {
          if (result) {
            window.location.reload();

            // alert(result.message);
          }
        },
        (result) => {
          alert(result.error.message);
        }
      );
    // }else{
    //   alert("invalid form")
    // }
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router
      .navigateByUrl('/viewtodo', { skipLocationChange: true })
      .then(() => {
        this.router.navigate([currentUrl]);
      });
  }
  
}
