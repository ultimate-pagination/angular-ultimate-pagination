import { Directive, OnChanges, Input, ComponentRef, ViewContainerRef, SimpleChanges, ComponentFactoryResolver, Output, EventEmitter, ChangeDetectorRef, Inject } from '@angular/core';
import { ULTIMATE_PAGINATION_THEME, UltimatePaginationTheme } from './ultimate-pagination.module';
import { ITEM_TYPES } from 'ultimate-pagination';

@Directive({
    selector: '[ultimatePaginationItem]'
})
export class UltimatePaginationItemDirective implements OnChanges {
    @Input() item;
    @Output() activate = new EventEmitter();

    private _componentRef: ComponentRef<any> = null;

    constructor(
        private _viewContainerRef: ViewContainerRef,
        private _componentFactoryResolver: ComponentFactoryResolver,
        @Inject(ULTIMATE_PAGINATION_THEME) private _theme: UltimatePaginationTheme
    ) {}

    ngOnChanges(changes: SimpleChanges) {
        let itemChange = changes['item'];
        if (itemChange.isFirstChange() || itemChange.previousValue.type !== itemChange.currentValue.type) {
            this._viewContainerRef.clear();
            this._componentRef = null;
            const ItemComponent = this.getItemComponentFromTheme();
            const componentFactory = this._componentFactoryResolver.resolveComponentFactory(ItemComponent);
            this._componentRef = this._viewContainerRef.createComponent(componentFactory);
            this._componentRef.instance.activate = this.activate;
        }

        this._componentRef.instance.item = this.item;
        const changeDetectorRef = this._componentRef.injector.get(ChangeDetectorRef);
        changeDetectorRef.markForCheck();
    }

    getItemComponentFromTheme() {
        return this._theme[this.item.type];
    }
}
