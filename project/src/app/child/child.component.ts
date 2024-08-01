import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
@Input() datafromparent:any
@Input() datafromme:any
@Output() notifyParent:EventEmitter<any> = new EventEmitter()

// #this is going to emit the data
sendData(){
  this.notifyParent.emit("Hello I am from child component")
}
}
