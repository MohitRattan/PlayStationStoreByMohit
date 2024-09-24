import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentGridConsoleComponent } from './content-grid-console.component';

describe('ContentGridConsoleComponent', () => {
  let component: ContentGridConsoleComponent;
  let fixture: ComponentFixture<ContentGridConsoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentGridConsoleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentGridConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
