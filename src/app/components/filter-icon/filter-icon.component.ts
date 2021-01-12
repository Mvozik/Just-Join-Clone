import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-icon',
  templateUrl: './filter-icon.component.html',
  styleUrls: ['./filter-icon.component.scss'],
})
export class FilterIconComponent implements OnInit {
  @Input() url: string;
  @Input() name: string;
  constructor() {}
  color() {
    return {
      all: this.name == 'All',
      php: this.name.toLowerCase() == 'php',
      ruby: this.name.toLowerCase() == 'ruby',
      javascript: this.name.toLowerCase() == 'js',
      net: this.name.toLowerCase() == '.net',
      java: this.name.toLowerCase() == 'java',
      python: this.name.toLowerCase() == 'python',
      mobile: this.name.toLowerCase() == 'mobile',
      scala: this.name.toLowerCase() == 'scala',
      c: this.name.toLowerCase() == 'c',
      testing: this.name.toLowerCase() == 'testing',
      devops: this.name.toLowerCase() == 'devops',
      uxui: this.name.toLowerCase() == 'ux/ui',
      pm: this.name.toLowerCase() == 'pm',
      game: this.name.toLowerCase() == 'game',
      analytics: this.name.toLowerCase() == 'analytics',
      security: this.name.toLowerCase() == 'security',
      data: this.name.toLowerCase() == 'data',
      go: this.name.toLowerCase() == 'go',
      sap: this.name.toLowerCase() == 'sap',
      support: this.name.toLowerCase() == 'support',
      other: this.name.toLowerCase() == 'other',
      html: this.name.toLowerCase() == 'html',
    };
  }
  ngOnInit(): void {}
}
