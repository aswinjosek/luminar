import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studentId:any
  studentName:any


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.studentId=this.route.snapshot.params['id']
    // this.studentName=this.route.snapshot.params['name']
    this.route.params.subscribe(
      (params)=>{
        this.studentId=params['id']
        this.studentName=params['name']
      }
    )
  }
  
}
