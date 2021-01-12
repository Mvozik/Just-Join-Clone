import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferDetailsInfoComponent } from './offer-details-info.component';

describe('OfferDetailsInfoComponent', () => {
  let component: OfferDetailsInfoComponent;
  let fixture: ComponentFixture<OfferDetailsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferDetailsInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferDetailsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
