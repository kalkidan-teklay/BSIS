import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBloodTestsComponent } from './manage-blood-tests.component';

describe('ManageBloodTestsComponent', () => {
  let component: ManageBloodTestsComponent;
  let fixture: ComponentFixture<ManageBloodTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageBloodTestsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageBloodTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
