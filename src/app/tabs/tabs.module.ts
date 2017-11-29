import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { TabComponent } from './tab/tab.component';
import { TabsComponent } from './tabs.component';

// Modules
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    FlexLayoutModule,
    CommonModule
  ],
  declarations: [
    TabComponent,
    TabsComponent
  ],
  providers: [],
  exports: [
    TabsComponent
  ]
})
export class TabsModule { }
