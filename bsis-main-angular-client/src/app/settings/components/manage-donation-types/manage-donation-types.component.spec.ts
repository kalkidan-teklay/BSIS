import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDonationTypesComponent } from './manage-donation-types.component';

describe('ManageDonationTypesComponent', () => {
  let component: ManageDonationTypesComponent;
  let fixture: ComponentFixture<ManageDonationTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageDonationTypesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageDonationTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
