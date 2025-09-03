import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NadaIntro } from './nada-intro';

describe('NadaIntro', () => {
  let component: NadaIntro;
  let fixture: ComponentFixture<NadaIntro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NadaIntro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NadaIntro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
