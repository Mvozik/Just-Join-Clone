import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'JustJoinClone';
  @ViewChild('sidenav') sidenav: MatSidenav;

  chandleToggle() {
    this.sidenav.toggle();
  }
}
