import { Component, Input, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ultimate-pagination-item-last-page',
  templateUrl: './pagination-item-last-page.component.html',
  styleUrls: ['./pagination-item-last-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationItemLastPageComponent {
  @Input() item;
  @Output() activate;
}
