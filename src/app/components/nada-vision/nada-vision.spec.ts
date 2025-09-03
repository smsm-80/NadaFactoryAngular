import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NadaVision } from './nada-vision';

describe('NadaVision', () => {
  let component: NadaVision;
  let fixture: ComponentFixture<NadaVision>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NadaVision]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NadaVision);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
