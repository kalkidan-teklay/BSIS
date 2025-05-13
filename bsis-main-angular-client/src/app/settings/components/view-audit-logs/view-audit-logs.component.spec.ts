import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAuditLogsComponent } from './view-audit-logs.component';

describe('ViewAuditLogsComponent', () => {
  let component: ViewAuditLogsComponent;
  let fixture: ComponentFixture<ViewAuditLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewAuditLogsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAuditLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
