import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { getPaginationModel, PaginationModelItem, ITEM_TYPES } from 'ultimate-pagination';

@Component({
    selector: 'ultimate-pagination',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <ng-container
        *ngFor="let item of paginationModel; trackBy: trackByKey"
        ultimatePaginationItem
        [item]="item"
        (activate)="onItemActivate(item)"
    ></ng-container>
    `
})
export class UltimatePaginationComponent {
    @Input() currentPage;
    @Input() totalPages;
    @Input() boundaryPagesRange;
    @Input() siblingPagesRange;
    @Input() hidePreviousAndNextPageLinks;
    @Input() hideFirstAndLastPageLinks;
    @Input() hideEllipsis;
    @Output() currentPageChange = new EventEmitter();

    paginationModel: PaginationModelItem[];

    ngOnChanges() {
        this.paginationModel = getPaginationModel({
            currentPage: this.currentPage,
            totalPages: this.totalPages,
            boundaryPagesRange: this.boundaryPagesRange,
            siblingPagesRange: this.siblingPagesRange,
            hidePreviousAndNextPageLinks: this.hidePreviousAndNextPageLinks,
            hideFirstAndLastPageLinks: this.hideFirstAndLastPageLinks,
            hideEllipsis: this.hideEllipsis
        });
    }

    trackByKey(index: number, item: PaginationModelItem): number {
        return item.key;
    }

    onItemActivate(item: PaginationModelItem) {
        this.currentPageChange.next(item.value);
    }
}
