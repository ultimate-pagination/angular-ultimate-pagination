import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationItemLastPageComponent } from './pagination-item-last-page.component';

describe('PaginationItemLastPageComponent', () => {
  let component: PaginationItemLastPageComponent;
  let fixture: ComponentFixture<PaginationItemLastPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationItemLastPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationItemLastPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
