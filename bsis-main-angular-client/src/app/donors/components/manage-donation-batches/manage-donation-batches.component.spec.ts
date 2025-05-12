import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDonationBatchesComponent } from './manage-donation-batches.component';

describe('ManageDonationBatchesComponent', () => {
  let component: ManageDonationBatchesComponent;
  let fixture: ComponentFixture<ManageDonationBatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageDonationBatchesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageDonationBatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
