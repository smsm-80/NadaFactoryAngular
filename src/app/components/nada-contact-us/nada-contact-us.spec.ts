import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NadaContactUs } from './nada-contact-us';

describe('NadaContactUs', () => {
  let component: NadaContactUs;
  let fixture: ComponentFixture<NadaContactUs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NadaContactUs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NadaContactUs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
