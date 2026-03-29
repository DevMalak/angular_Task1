import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  username: string = "malak";
  message!: string;

  sendData(data: any) {
    this.username = data.target.value;
  }

  receiveData(message: any) {
    this.message = message;
  }
}
