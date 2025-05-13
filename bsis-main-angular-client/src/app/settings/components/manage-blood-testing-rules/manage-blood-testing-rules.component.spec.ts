import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBloodTestingRulesComponent } from './manage-blood-testing-rules.component';

describe('ManageBloodTestingRulesComponent', () => {
  let component: ManageBloodTestingRulesComponent;
  let fixture: ComponentFixture<ManageBloodTestingRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageBloodTestingRulesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageBloodTestingRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
