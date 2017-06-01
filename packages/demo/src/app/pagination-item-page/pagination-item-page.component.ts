import { Component, Input, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ultimate-pagination-item-page',
  templateUrl: './pagination-item-page.component.html',
  styleUrls: ['./pagination-item-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationItemPageComponent {
  @Input() item;
  @Output() activate;
}
