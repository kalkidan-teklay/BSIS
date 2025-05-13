import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerologyReportComponent } from './serology-report.component';

describe('SerologyReportComponent', () => {
  let component: SerologyReportComponent;
  let fixture: ComponentFixture<SerologyReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SerologyReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerologyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
