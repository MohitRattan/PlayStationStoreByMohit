import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ps5AccessoriesComponent } from './ps5-accessories.component';

describe('Ps5AccessoriesComponent', () => {
  let component: Ps5AccessoriesComponent;
  let fixture: ComponentFixture<Ps5AccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ps5AccessoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ps5AccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
