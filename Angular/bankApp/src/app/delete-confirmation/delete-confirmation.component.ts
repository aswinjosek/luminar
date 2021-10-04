import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.css']
})
export class DeleteConfirmationComponent implements OnInit {

  @Input() item:String|undefined
  @Output () onDelete=new EventEmitter()
  @Output () onCancel=new EventEmitter()


  constructor() { }

  ngOnInit(): void {
  }

  delete(){
    this.onDelete.emit(this.item)


  }

  cancel(){
    this.onCancel.emit(this.item)

  }

}
