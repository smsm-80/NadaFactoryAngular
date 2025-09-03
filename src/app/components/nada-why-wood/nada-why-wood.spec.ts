import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NadaWhyWood } from './nada-why-wood';

describe('NadaWhyWood', () => {
  let component: NadaWhyWood;
  let fixture: ComponentFixture<NadaWhyWood>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NadaWhyWood]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NadaWhyWood);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
