import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchmakingPageComponent } from './matchmaking-page.component';

describe('MatchmakingPageComponent', () => {
  let component: MatchmakingPageComponent;
  let fixture: ComponentFixture<MatchmakingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchmakingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchmakingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
