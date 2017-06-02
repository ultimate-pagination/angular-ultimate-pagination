# angular-ultimate-pagination

## Installation

To install this library, run:

```bash
$ npm install angular-ultimate-pagination --save
```

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install angular-ultimate-pagination
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Import UltimatePaginationModule
import { UltimatePaginationModule } from 'angular-ultimate-pagination';

import { AppComponent } from './app.component';

// Implement component's per each pagination item type
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

    // Add UltimatePaginationModule to AppModule's imports and provide theme by specifying components per item type
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

```

Once `UltimatePaginationModule` is imported you can use pagination component:

```xml
<ultimate-pagination
    [(currentPage)]="currentPage"
    [totalPages]="totalPages"
    [boundaryPagesRange]="boundaryPagesRange"
    [siblingPagesRange]="siblingPagesRange"
    [hidePreviousAndNextPageLinks]="hidePreviousAndNextPageLinks"
    [hideFirstAndLastPageLinks]="hideFirstAndLastPageLinks"
    [hideEllipsis]="hideEllipsis"
></ultimate-pagination>
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Dmytro Yarmak](mailto:dmytroyarmak@gmail.com)
