import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindComponentsComponent } from './find-components.component';

describe('FindComponentsComponent', () => {
  let component: FindComponentsComponent;
  let fixture: ComponentFixture<FindComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindComponentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
