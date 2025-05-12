import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorCounsellingComponent } from './donor-counselling.component';

describe('DonorCounsellingComponent', () => {
  let component: DonorCounsellingComponent;
  let fixture: ComponentFixture<DonorCounsellingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonorCounsellingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonorCounsellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
