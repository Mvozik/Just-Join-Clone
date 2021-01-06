import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferDetailsApplyComponent } from './offer-details-apply.component';

describe('OfferDetailsApplyComponent', () => {
  let component: OfferDetailsApplyComponent;
  let fixture: ComponentFixture<OfferDetailsApplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferDetailsApplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferDetailsApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
