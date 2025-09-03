import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NadaMessage } from './nada-message';

describe('NadaMessage', () => {
  let component: NadaMessage;
  let fixture: ComponentFixture<NadaMessage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NadaMessage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NadaMessage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
