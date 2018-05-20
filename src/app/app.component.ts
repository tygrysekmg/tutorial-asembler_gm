
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 4 Project';
months = ['January', 'Feburary', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November',
            'December'];
            isavailable = true;
}
