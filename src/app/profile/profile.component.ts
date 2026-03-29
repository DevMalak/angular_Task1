import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

isLoggedIn: boolean = false;

skills: string[] = ['Angular', 'TypeScript', 'HTML', 'CSS'];

role: string = 'Admin';

userName: string = 'Malak';          // للـ Interpolation
imagePath: string = 'favicon.ico';   // للـ Property Binding
isBtnDisabled: boolean = true;       // للـ Attribute Binding
userMessage: string = '';
imageSrc: string = '';


}
