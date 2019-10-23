import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannerProposalComponent } from './planner-proposal.component';

describe('PlannerProposalComponent', () => {
  let component: PlannerProposalComponent;
  let fixture: ComponentFixture<PlannerProposalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlannerProposalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlannerProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
