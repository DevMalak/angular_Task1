import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

@Input() data!: string;
@Output() send = new EventEmitter();

  sendDataToParent(event: any) {
    this.send.emit(event.target.value);
  }
}
