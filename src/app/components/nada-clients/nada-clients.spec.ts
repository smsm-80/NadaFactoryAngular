import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NadaClients } from './nada-clients';

describe('NadaClients', () => {
  let component: NadaClients;
  let fixture: ComponentFixture<NadaClients>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NadaClients]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NadaClients);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
