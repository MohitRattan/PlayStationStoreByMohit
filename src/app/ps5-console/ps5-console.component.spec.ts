import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ps5ConsoleComponent } from './ps5-console.component';

describe('Ps5ConsoleComponent', () => {
  let component: Ps5ConsoleComponent;
  let fixture: ComponentFixture<Ps5ConsoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ps5ConsoleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ps5ConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
