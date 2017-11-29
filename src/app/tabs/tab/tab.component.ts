import { Component, Input, Output, EventEmitter, OnChanges, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  styleUrls: ['./tab.component.scss'],
  template: `
    <div class='tab' [ngClass]='{"active": active}'>
      <div class='text'>{{tab.name}}</div>
      <i *ngIf='closeAllowed' class='material-icons close-icon' (click)='close($event)'>clear</i>
    </div>
  `
})
export class TabComponent implements OnChanges {
  @Input() tab: any;
  @Input() active: boolean;
  @Input() closeAllowed: boolean;
  @Input() width: number;
  @Output() closeEvent: EventEmitter<any> = new EventEmitter();

  constructor (
    private elementRef: ElementRef,
  ) {}

  ngOnChanges() {
    const tabElement = this.elementRef.nativeElement.querySelector('.tab');
    const textElement = this.elementRef.nativeElement.querySelector('.text');

    if (tabElement) {
      tabElement.style.width = this.width + 'px';
      textElement.style.width = this.width - 28 + 'px';
      tabElement.style.transition = 'width 400ms';
    }
  }

  close = (event) => {
    event.stopPropagation();
    this.closeEvent.emit();
  }
}
