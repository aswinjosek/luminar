import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient,private datepipe: DatePipe) { }


  register(username:any,password:any){
    const data={
      username,
      password
    }
    return this.http.post("http://localhost:3000/register",data)
  }
  login(username:any,password:any){
    const data={
      username,
      password
    }
    return this.http.post("http://localhost:3000/login",data)

  }

  addTodo(username:any,todo:any,date:any){
    const data={
      username,
      todo,
      // date
      date:this.datepipe.transform(date,"yyyy-MM-dd")
    }
    
    return this.http.post("http://localhost:3000/addTodo",data)
  }


  getTodos(objId:any){
    
    const data={
      objId
    }
    return this.http.post("http://localhost:3000/getTodos",data)

  }

  todoDelete(objId:any,todoId:any){
    console.log(todoId);
    
   
     const data={
      objId, todoId
    }
    return this.http.post("http://localhost:3000/todoDelete",data)

  }

  todoUpdate(objId:any,todoId:any,updatedTodo:any,updatedDate:any){
    const data={
      objId,todoId,updatedTodo,
      // updatedDate
      updatedDate:this.datepipe.transform(updatedDate,"yyyy-MM-dd")
    }
    console.log(data);
    
    return this.http.post("http://localhost:3000/todoUpdate",data)
  }

  todoFind(objId:any,myDate:any){
    const data={
      objId,myDate
    }
    return this.http.post("http://localhost:3000/todoFind",data)
  }
 

}
