import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
interface IUser {
  age: number;
  name: string;
}
@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  appTitle = 'petrosgram';

  user: IUser = {
    age: 32,
    name: 'Petro',
  };
}
