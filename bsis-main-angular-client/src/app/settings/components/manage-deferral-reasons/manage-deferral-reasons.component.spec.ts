import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDeferralReasonsComponent } from './manage-deferral-reasons.component';

describe('ManageDeferralReasonsComponent', () => {
  let component: ManageDeferralReasonsComponent;
  let fixture: ComponentFixture<ManageDeferralReasonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageDeferralReasonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageDeferralReasonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
