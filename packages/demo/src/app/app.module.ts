import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UltimatePaginationModule, ITEM_TYPES } from 'angular-ultimate-pagination';
import { AppComponent } from './app.component';

import { PaginationItemPageComponent } from './pagination-item-page/pagination-item-page.component';
import { PaginationItemEllipsisComponent } from './pagination-item-ellipsis/pagination-item-ellipsis.component';
import { PaginationItemFirstPageComponent } from './pagination-item-first-page/pagination-item-first-page.component';
import { PaginationItemPreviousPageComponent } from './pagination-item-previous-page/pagination-item-previous-page.component';
import { PaginationItemNextPageComponent } from './pagination-item-next-page/pagination-item-next-page.component';
import { PaginationItemLastPageComponent } from './pagination-item-last-page/pagination-item-last-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginationItemPageComponent,
    PaginationItemEllipsisComponent,
    PaginationItemFirstPageComponent,
    PaginationItemPreviousPageComponent,
    PaginationItemNextPageComponent,
    PaginationItemLastPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UltimatePaginationModule.withTheme({
      PAGE: PaginationItemPageComponent,
      ELLIPSIS: PaginationItemEllipsisComponent,
      FIRST_PAGE_LINK: PaginationItemFirstPageComponent,
      PREVIOUS_PAGE_LINK: PaginationItemPreviousPageComponent,
      NEXT_PAGE_LINK: PaginationItemNextPageComponent,
      LAST_PAGE_LINK: PaginationItemLastPageComponent
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
