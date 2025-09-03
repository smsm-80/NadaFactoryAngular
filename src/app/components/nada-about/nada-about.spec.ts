import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NadaAbout } from './nada-about';

describe('NadaAbout', () => {
  let component: NadaAbout;
  let fixture: ComponentFixture<NadaAbout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NadaAbout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NadaAbout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
