import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [LoginComponent],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testProject';
}
