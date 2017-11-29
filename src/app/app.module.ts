import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Component
import { AppComponent } from './app.component';

// Module
import { TabsModule } from './tabs/tabs.module';

@NgModule({
  imports: [
    BrowserModule,
    TabsModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
