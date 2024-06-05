import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  title = 'My App';
  isEditable = true;
  names = new Array();

  onMouseOver() {
    this.title = 'Mouse over time!';
  }

  onMouseLeave() {
    this.title = 'My App';
  }

  addName(name: string) {
    this.names.push(name);
  }
}
