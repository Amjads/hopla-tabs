import { Component, Input, AfterViewChecked, OnInit, ElementRef, ChangeDetectorRef, OnChanges } from '@angular/core';

@Component({
  selector: 'app-tabs',
  styleUrls: ['./tabs.component.scss'],
  template: `
    <div class='wrapper' fxLayout='row' fxLayoutAlign='start stretch'>
      <div *ngFor='let tab of tabs; let i = index' (click)='selectTab(i)'>
        <app-tab [tab]='tab' [active]='i === activeTab' (closeEvent)='closeTab(i)'
          [closeAllowed]='closeTabsAllowed' [width]='tabsWidth'>
        </app-tab>
      </div>
    </div>
  `
})
export class TabsComponent implements OnInit, AfterViewChecked, OnChanges {
  @Input() tabs: Array<any>;
  @Input() closeTabsAllowed: boolean;

  activeTab = 0;
  wrapper: any;
  wrapperWidth: number;
  tabsWidth: number;
  minimumTabs = 8;

  constructor (
    private elementRef: ElementRef,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.wrapper = this.elementRef.nativeElement.querySelector('.wrapper');
  }

  // On resize, recalculate the size of tabs
  ngAfterViewChecked() {
    if (this.wrapper.offsetWidth !== 0 && this.wrapper.offsetWidth !== this.wrapperWidth) {
      this.wrapperWidth = this.wrapper.offsetWidth;

      this.setTabSize();
    }
  }

  ngOnChanges() {
    if (this.tabs.length > 0) this.setTabSize();
  }

  selectTab = (index: number) => {
    this.activeTab = index;
  }

  closeTab = (index: number) => {
    this.tabs.splice(index, 1); // Remove the tab.

    // Change in activeTab
    if (index === this.activeTab) this.activeTab = 0;
    if (index < this.activeTab) this.activeTab--;

    this.setTabSize(); // Resize the tabs
  }

  setTabSize = () => {
    const numberTab = this.tabs.length > this.minimumTabs ? this.tabs.length : this.minimumTabs;
    this.tabsWidth = this.wrapperWidth / numberTab;
    this.changeDetectorRef.detectChanges();
  }
}
