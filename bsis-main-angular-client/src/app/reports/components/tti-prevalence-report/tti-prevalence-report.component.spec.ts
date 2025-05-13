import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TTIPrevalenceReportComponent } from './tti-prevalence-report.component';

describe('TTIPrevalenceReportComponent', () => {
  let component: TTIPrevalenceReportComponent;
  let fixture: ComponentFixture<TTIPrevalenceReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TTIPrevalenceReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TTIPrevalenceReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
