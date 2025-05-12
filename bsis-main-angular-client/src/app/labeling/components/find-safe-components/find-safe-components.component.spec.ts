import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindSafeComponentsComponent } from './find-safe-components.component';

describe('FindSafeComponentsComponent', () => {
  let component: FindSafeComponentsComponent;
  let fixture: ComponentFixture<FindSafeComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindSafeComponentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindSafeComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
