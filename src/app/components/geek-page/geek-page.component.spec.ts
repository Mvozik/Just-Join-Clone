import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeekPageComponent } from './geek-page.component';

describe('GeekPageComponent', () => {
  let component: GeekPageComponent;
  let fixture: ComponentFixture<GeekPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeekPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeekPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
