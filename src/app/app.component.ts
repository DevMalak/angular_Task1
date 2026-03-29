
/**
 * --- Task 2: Understanding Project Folders ---
 * 1. src/app/: This is the main folder where I build all my components and logic.
 * 2. app.component.ts: This file handles the logic for the root (main) component.
 * 3. app.module.ts: It acts as the organizer that connects all components and libraries together.
 * 4. src/styles.css: I use this file to add global CSS styles for the whole website.
 * 5. angular.json: This is the configuration file where I linked Bootstrap and Font Awesome.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-portfolio';
}
