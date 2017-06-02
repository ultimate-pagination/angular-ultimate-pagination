import { NgModule, ModuleWithProviders, ANALYZE_FOR_ENTRY_COMPONENTS, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UltimatePaginationComponent } from './ultimate-pagination.component';
import { UltimatePaginationItemDirective } from './ultimate-pagination-item.directive';

export interface UltimatePaginationTheme {
    [itemType: string]: any;
}

export const ULTIMATE_PAGINATION_THEME = new InjectionToken<UltimatePaginationTheme>('ULTIMATE_PAGINATION_THEME');

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        UltimatePaginationComponent,
        UltimatePaginationItemDirective
    ],
    exports: [
        UltimatePaginationComponent
    ]
})
export class UltimatePaginationModule {
    static withTheme(theme: UltimatePaginationTheme): ModuleWithProviders {
        return {
            ngModule: UltimatePaginationModule,
            providers: [
                {
                    provide: ANALYZE_FOR_ENTRY_COMPONENTS,
                    multi: true,
                    useValue: theme
                },
                {
                    provide: ULTIMATE_PAGINATION_THEME,
                    useValue: theme
                }
            ]
        }
    }
}
