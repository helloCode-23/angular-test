import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./index.scss'],
  templateUrl: './myApp.html',
})
export class App {
  name = 'Angular';
  index = ['1', '2', '3', '4', '5'];
}

bootstrapApplication(App);
