import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageReturnsComponent } from './manage-returns.component';

describe('ManageReturnsComponent', () => {
  let component: ManageReturnsComponent;
  let fixture: ComponentFixture<ManageReturnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageReturnsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageReturnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
