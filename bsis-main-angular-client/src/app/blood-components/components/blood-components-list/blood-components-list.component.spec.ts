import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodComponentsListComponent } from './blood-components-list.component';

describe('BloodComponentsListComponent', () => {
  let component: BloodComponentsListComponent;
  let fixture: ComponentFixture<BloodComponentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BloodComponentsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloodComponentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
