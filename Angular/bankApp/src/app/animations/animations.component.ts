import { state, trigger,style, transition,animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css'],
  animations:[
    trigger('openClose',[
      state('open',style({
        height:'100px',
        backgroundColor:"red"
        
      })),
      state('close',style({
        height:'150px',
        backgroundColor:"green"
        
      })),
      transition('open=>close',[
        animate('1s')
      ]),
      transition('close=>open',[
        animate('2s')
      ]),
    ])
  ]
})
export class AnimationsComponent implements OnInit {

  isOpen=true;
  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.isOpen=!(this.isOpen)
  }

}
