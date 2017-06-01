import { Component, Input, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ultimate-pagination-item-first-page',
  templateUrl: './pagination-item-first-page.component.html',
  styleUrls: ['./pagination-item-first-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationItemFirstPageComponent {
  @Input() item;
  @Output() activate;
}
