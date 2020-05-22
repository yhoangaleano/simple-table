import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleTableActionsComponent } from './simple-table-actions.component';

describe('SimpleTableActionsComponent', () => {
  let component: SimpleTableActionsComponent;
  let fixture: ComponentFixture<SimpleTableActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleTableActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleTableActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
