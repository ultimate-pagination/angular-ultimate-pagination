import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationItemPreviousPageComponent } from './pagination-item-previous-page.component';

describe('PaginationItemPreviousPageComponent', () => {
  let component: PaginationItemPreviousPageComponent;
  let fixture: ComponentFixture<PaginationItemPreviousPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationItemPreviousPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationItemPreviousPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
