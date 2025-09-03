import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NadaDetails } from './nada-details';

describe('NadaDetails', () => {
  let component: NadaDetails;
  let fixture: ComponentFixture<NadaDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NadaDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NadaDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
