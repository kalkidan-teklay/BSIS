import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelComponentsComponent } from './label-components.component';

describe('LabelComponentsComponent', () => {
  let component: LabelComponentsComponent;
  let fixture: ComponentFixture<LabelComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabelComponentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabelComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
