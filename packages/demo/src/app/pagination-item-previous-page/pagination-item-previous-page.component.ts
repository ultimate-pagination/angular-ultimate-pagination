import { Component, Input, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ultimate-pagination-item-previous-page',
  templateUrl: './pagination-item-previous-page.component.html',
  styleUrls: ['./pagination-item-previous-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationItemPreviousPageComponent {
  @Input() item;
  @Output() activate;
}
