import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentList = [{ id: 1, name: 'a', mark1: 20, mark2: 30, mark3: 40 },
  { id: 2, name: 'b', mark1: 4, mark2: 30, mark3: 40 },
  { id: 3, name: 'b', mark1: 3, mark2: 5, mark3: 40 },
  { id: 4, name: 'b', mark1: 20, mark2: 3, mark3: 56 },
  { id: 5, name: 'd', mark1: 2, mark2: 30, mark3: 40 }
];

  constructor() { }
  calculate(student:any){
    alert(student.mark1+student.mark2+student.mark3)
  }
}
