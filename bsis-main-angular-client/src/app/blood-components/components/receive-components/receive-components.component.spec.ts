import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveComponentsComponent } from './receive-components.component';

describe('ReceiveComponentsComponent', () => {
  let component: ReceiveComponentsComponent;
  let fixture: ComponentFixture<ReceiveComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceiveComponentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiveComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
