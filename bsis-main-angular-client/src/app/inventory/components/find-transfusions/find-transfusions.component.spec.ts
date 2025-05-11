import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindTransfusionsComponent } from './find-transfusions.component';

describe('FindTransfusionsComponent', () => {
  let component: FindTransfusionsComponent;
  let fixture: ComponentFixture<FindTransfusionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindTransfusionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindTransfusionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
