import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  values = []
  addText(text: string) {
  this.values.push(text)
  console.log(this.values)
}
}
