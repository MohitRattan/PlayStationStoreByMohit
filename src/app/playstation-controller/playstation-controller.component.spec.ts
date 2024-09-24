import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaystationControllerComponent } from './playstation-controller.component';

describe('PlaystationControllerComponent', () => {
  let component: PlaystationControllerComponent;
  let fixture: ComponentFixture<PlaystationControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaystationControllerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaystationControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
