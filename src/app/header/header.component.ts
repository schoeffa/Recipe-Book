import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  @Output() router = new EventEmitter<{route: string}>()

  constructor() { }

  ngOnInit(): void {
  }

  onRoute(route: string) {
    this.router.emit({route: route})
  }

}
