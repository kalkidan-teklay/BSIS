import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsMessageConfigurationsComponent } from './sms-message-configurations.component';

describe('SmsMessageConfigurationsComponent', () => {
  let component: SmsMessageConfigurationsComponent;
  let fixture: ComponentFixture<SmsMessageConfigurationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmsMessageConfigurationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmsMessageConfigurationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
