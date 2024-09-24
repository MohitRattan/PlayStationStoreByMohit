import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatchTheBallGameComponent } from './catch-the-ball-game.component';

describe('CatchTheBallGameComponent', () => {
  let component: CatchTheBallGameComponent;
  let fixture: ComponentFixture<CatchTheBallGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatchTheBallGameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatchTheBallGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
