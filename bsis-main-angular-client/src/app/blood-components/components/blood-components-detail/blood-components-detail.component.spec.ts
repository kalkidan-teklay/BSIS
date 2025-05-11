import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodComponentsDetailComponent } from './blood-components-detail.component';

describe('BloodComponentsDetailComponent', () => {
  let component: BloodComponentsDetailComponent;
  let fixture: ComponentFixture<BloodComponentsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BloodComponentsDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloodComponentsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
