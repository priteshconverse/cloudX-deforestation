import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'deforestation';
  loginFlag: boolean = false;

  login() {
    this.loginFlag = true;
  }
}


