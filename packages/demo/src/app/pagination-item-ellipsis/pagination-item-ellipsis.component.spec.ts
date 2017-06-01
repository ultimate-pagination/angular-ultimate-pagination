import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationItemEllipsisComponent } from './pagination-item-ellipsis.component';

describe('PaginationItemEllipsisComponent', () => {
  let component: PaginationItemEllipsisComponent;
  let fixture: ComponentFixture<PaginationItemEllipsisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationItemEllipsisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationItemEllipsisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
