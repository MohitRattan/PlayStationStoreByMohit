import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaystationPcComponent } from './playstation-pc.component';

describe('PlaystationPcComponent', () => {
  let component: PlaystationPcComponent;
  let fixture: ComponentFixture<PlaystationPcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaystationPcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaystationPcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
