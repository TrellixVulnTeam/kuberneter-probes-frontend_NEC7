import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string;
  backendURL: string

  constructor() {
    this.title = 'Angular frontend for Quarkus API';
    this.backendURL = environment.backendURL;
  }
}
