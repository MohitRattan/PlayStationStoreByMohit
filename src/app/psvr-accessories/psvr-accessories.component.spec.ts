import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsvrAccessoriesComponent } from './psvr-accessories.component';

describe('PsvrAccessoriesComponent', () => {
  let component: PsvrAccessoriesComponent;
  let fixture: ComponentFixture<PsvrAccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsvrAccessoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PsvrAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
