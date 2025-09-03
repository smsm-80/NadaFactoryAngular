import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NadaFuturePlans } from './nada-future-plans';

describe('NadaFuturePlans', () => {
  let component: NadaFuturePlans;
  let fixture: ComponentFixture<NadaFuturePlans>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NadaFuturePlans]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NadaFuturePlans);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
