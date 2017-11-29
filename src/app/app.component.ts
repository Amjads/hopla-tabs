import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <app-tabs [tabs]='tabs' [closeTabsAllowed]='true'></app-tabs>

    <button (click)='addTab()'>Add Tab</button>
  `
})
export class AppComponent {
  tabs = [
    { name: 'Super long tab' },
    { name: 'Tab2' },
    { name: 'Tab3' },
    { name: 'Tab4' },
    { name: 'Tab5' },
    { name: 'Tab6' },
    { name: 'Tab7' },
  ];

  index = 8;

  addTab = () => {
    this.tabs.push({ name: 'Tab' + this.index });
    this.index++;
    this.tabs = this.tabs.slice(); // hack for change detection;
  }
}
