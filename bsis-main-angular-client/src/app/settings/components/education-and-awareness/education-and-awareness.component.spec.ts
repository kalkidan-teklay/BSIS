import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationAndAwarenessComponent } from './education-and-awareness.component';

describe('EducationAndAwarenessComponent', () => {
  let component: EducationAndAwarenessComponent;
  let fixture: ComponentFixture<EducationAndAwarenessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationAndAwarenessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationAndAwarenessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
