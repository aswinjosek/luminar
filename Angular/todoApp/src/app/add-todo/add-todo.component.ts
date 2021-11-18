import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { DateAdapter } from '@angular/material/core';
import { DatePipe, Location } from '@angular/common';
import { Router } from '@angular/router';




@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
 

})
export class AddTodoComponent implements OnInit {
  username:any
  objId:any
  todos:any
  


  addTodoForm = this.fb.group({
    todo: ['', [Validators.required]],
    date: ['', [Validators.required]],
  });

  myDate:any = new Date();

  constructor(private ds: DataService, private fb:FormBuilder,private datepipe: DatePipe, private router:Router) { 
    this.objId=localStorage.getItem("id")
    this.username= localStorage.getItem("currentUser")
    this.myDate = this.datepipe.transform(this.myDate,"yyyy-MM-dd");
    console.log(this.myDate);
    // this.ds.todoFind(this.objId, this.myDate).subscribe(
    //   (data: any) => {
    //     if (data) {
    //       // alert(data.message);
    //       console.log(data);
          
          
    //       this.todos= data.result[0].todos
    //       console.log(this.todos);

          
         
        //}
    //   },
    //   (data:any) => {
    //   }
    // );
    
    





  }

  ngOnInit(): void {
    this.ds.getTodos(this.objId).subscribe(
      (result: any) => {
        if (result) {
          console.log(result);
          
          // console.log(result.todos);
          // this.todos=result.todos
          // console.log(this.todos);
          this.todos=result.todos.filter((keys:any)=>keys.date==this.myDate)
          console.log(this.todos);
          
          
          
          
          
        }
      },
      (result) => {
        alert(result);
      }


    );

    
  
    


  }

 addTodo(){

  var todo= this.addTodoForm.value.todo;
  var date=this.addTodoForm.value.date;
  // this.date=new Date();
  console.log(date);
  
  // let latestDate= this.datepipe.transform(this.date,'dd--yyyy')
  // console.log(latestDate);
  
  var username= localStorage.getItem("currentUser")

  if(this.addTodoForm.valid){
    this.ds.addTodo(username,todo,date).subscribe(
      (result: any) => {
        if (result) {
          alert(result.message);
        }
      },
      (result) => {
        alert(result.error.message);
      }
    );

  }else{
    alert("invalid Form")
  }}



  logout(){
    localStorage.removeItem("id")
    localStorage.removeItem("currentUser")
    this.router.navigateByUrl('')
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router
      .navigateByUrl('/viewtodo', { skipLocationChange: true })
      .then(() => {
        this.router.navigate([currentUrl]);
      });
  }



// todoFind(){
//     this.ds.todoFind(this.objId, this.myDate).subscribe(
//       (data: any) => {
//         if (data) {
//           alert(data.message);
//           this.todos= data.result[0].todos
//           console.log(this.todos);

          
         
//         }
//       },
//       (data:any) => {
//         alert(data.error.message);
//       }
//     );

//   }

}
