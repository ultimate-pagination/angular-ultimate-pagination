import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UltimatePaginationModule } from 'angular-ultimate-pagination';
import { AppComponent } from './app.component';

console.log(UltimatePaginationModule);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UltimatePaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
