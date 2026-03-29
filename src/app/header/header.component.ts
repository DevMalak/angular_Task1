import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  // 1. Interpolation
  studentName: string = "malak";

  // 2. Property Binding
  imgSource: string = "assets/nature.jpg";
  // 2. Property Binding
  // I set isDisabled to 'true' following the task requirements. 
  // This means the button is currently disabled and won't trigger the click event.
  // To test the Event Binding and see the console output, this should be set to 'false'.

  isDisabled: boolean = true;

  // 3. Event Binding
  message: string = "";
 onButtonClick(e: any) {
    this.message = "Button was clicked!";
    console.log("Hi! Task 4 is working.");
    console.log("Value: ", e.target.value);
  }
}
