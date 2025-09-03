import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NadaValues } from './nada-values';

describe('NadaValues', () => {
  let component: NadaValues;
  let fixture: ComponentFixture<NadaValues>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NadaValues]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NadaValues);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
