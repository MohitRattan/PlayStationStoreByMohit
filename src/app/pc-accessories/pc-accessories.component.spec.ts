import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcAccessoriesComponent } from './pc-accessories.component';

describe('PcAccessoriesComponent', () => {
  let component: PcAccessoriesComponent;
  let fixture: ComponentFixture<PcAccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PcAccessoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PcAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
