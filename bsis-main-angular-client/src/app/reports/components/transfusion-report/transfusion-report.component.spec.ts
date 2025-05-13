import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransfusionReportComponent } from './transfusion-report.component';

describe('TransfusionReportComponent', () => {
  let component: TransfusionReportComponent;
  let fixture: ComponentFixture<TransfusionReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransfusionReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransfusionReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
