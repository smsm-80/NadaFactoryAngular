import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NadaTargetedMarkets } from './nada-targeted-markets';

describe('NadaTargetedMarkets', () => {
  let component: NadaTargetedMarkets;
  let fixture: ComponentFixture<NadaTargetedMarkets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NadaTargetedMarkets]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NadaTargetedMarkets);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
