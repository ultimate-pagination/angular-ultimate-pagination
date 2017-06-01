import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationItemFirstPageComponent } from './pagination-item-first-page.component';

describe('PaginationItemFirstPageComponent', () => {
  let component: PaginationItemFirstPageComponent;
  let fixture: ComponentFixture<PaginationItemFirstPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationItemFirstPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationItemFirstPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
