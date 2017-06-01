import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationItemPageComponent } from './pagination-item-page.component';

describe('PaginationItemPageComponent', () => {
  let component: PaginationItemPageComponent;
  let fixture: ComponentFixture<PaginationItemPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationItemPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
