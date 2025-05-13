import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDivisionsComponent } from './manage-divisions.component';

describe('ManageDivisionsComponent', () => {
  let component: ManageDivisionsComponent;
  let fixture: ComponentFixture<ManageDivisionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageDivisionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageDivisionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
