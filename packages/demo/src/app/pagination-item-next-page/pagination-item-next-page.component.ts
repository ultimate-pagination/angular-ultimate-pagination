import { Component, Input, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ultimate-pagination-item-next-page',
  templateUrl: './pagination-item-next-page.component.html',
  styleUrls: ['./pagination-item-next-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationItemNextPageComponent {
  @Input() item;
  @Output() activate;
}
