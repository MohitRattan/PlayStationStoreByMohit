import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ps4AccessoriesComponent } from './ps4-accessories.component';

describe('Ps4AccessoriesComponent', () => {
  let component: Ps4AccessoriesComponent;
  let fixture: ComponentFixture<Ps4AccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ps4AccessoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ps4AccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
