import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannerNameComponent } from './planner-name.component';

describe('PlannerNameComponent', () => {
  let component: PlannerNameComponent;
  let fixture: ComponentFixture<PlannerNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlannerNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlannerNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
