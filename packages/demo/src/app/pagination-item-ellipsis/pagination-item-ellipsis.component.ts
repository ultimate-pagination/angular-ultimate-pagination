import { Component, Input, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ultimate-pagination-item-ellipsis',
  templateUrl: './pagination-item-ellipsis.component.html',
  styleUrls: ['./pagination-item-ellipsis.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationItemEllipsisComponent {
  @Input() item;
  @Output() activate;
}
