import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubPsvr2Component } from './sub-psvr2.component';

describe('SubPsvr2Component', () => {
  let component: SubPsvr2Component;
  let fixture: ComponentFixture<SubPsvr2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubPsvr2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubPsvr2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
