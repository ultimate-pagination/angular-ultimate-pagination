import { Component } from '@angular/core';

@Component({
  selector: 'up-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 1;
  totalPages = 10;
}
