import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NadaOperations } from './nada-operations';

describe('NadaOperations', () => {
  let component: NadaOperations;
  let fixture: ComponentFixture<NadaOperations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NadaOperations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NadaOperations);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
