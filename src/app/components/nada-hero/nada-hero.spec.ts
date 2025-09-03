import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NadaHero } from './nada-hero';

describe('NadaHero', () => {
  let component: NadaHero;
  let fixture: ComponentFixture<NadaHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NadaHero]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NadaHero);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
