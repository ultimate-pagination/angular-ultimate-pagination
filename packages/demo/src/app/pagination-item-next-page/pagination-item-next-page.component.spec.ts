import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationItemNextPageComponent } from './pagination-item-next-page.component';

describe('PaginationItemNextPageComponent', () => {
  let component: PaginationItemNextPageComponent;
  let fixture: ComponentFixture<PaginationItemNextPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationItemNextPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationItemNextPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
