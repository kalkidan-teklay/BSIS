import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralConfigurationsComponent } from './general-configurations.component';

describe('GeneralConfigurationsComponent', () => {
  let component: GeneralConfigurationsComponent;
  let fixture: ComponentFixture<GeneralConfigurationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralConfigurationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralConfigurationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
