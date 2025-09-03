import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NadaVision2030 } from './nada-vision2030';

describe('NadaVision2030', () => {
  let component: NadaVision2030;
  let fixture: ComponentFixture<NadaVision2030>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NadaVision2030]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NadaVision2030);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
