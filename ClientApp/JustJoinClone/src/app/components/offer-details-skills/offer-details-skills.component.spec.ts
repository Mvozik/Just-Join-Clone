import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferDetailsSkillsComponent } from './offer-details-skills.component';

describe('OfferDetailsSkillsComponent', () => {
  let component: OfferDetailsSkillsComponent;
  let fixture: ComponentFixture<OfferDetailsSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferDetailsSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferDetailsSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
