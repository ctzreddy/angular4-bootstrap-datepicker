import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DateFilterUniversalComponent } from './date-filter-universal/date-filter-universal.component';

import { TestData } from './Data/test-data';

@NgModule({
  declarations: [
    AppComponent,
    // App components
    DateFilterUniversalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [TestData],
  bootstrap: [AppComponent]
})
export class AppModule { }
