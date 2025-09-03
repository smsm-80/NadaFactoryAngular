import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NadaEnvironmentalImpact } from './nada-environmental-impact';

describe('NadaEnvironmentalImpact', () => {
  let component: NadaEnvironmentalImpact;
  let fixture: ComponentFixture<NadaEnvironmentalImpact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NadaEnvironmentalImpact]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NadaEnvironmentalImpact);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
