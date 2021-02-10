import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  @Output() toggleEmit: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {
    this.pageString = location.pathname.split('/')[2];
  }

  toggle() {
    this.toggleEmit.emit(true);
  }
  currentRoute: string;
  pageString: string = '';

  page(page: string) {
    return {
      picked: this.pageString == page,
    };
  }

  changePage(page: string) {
    this.pageString = page;
  }
}
