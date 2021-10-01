import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() submitData = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }

  submitSearch(newText:string) {
    console.log(newText)
    this.submitData.emit(newText)
  }
}
