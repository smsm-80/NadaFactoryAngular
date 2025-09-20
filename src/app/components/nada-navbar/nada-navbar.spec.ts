import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NadaNavbar } from './nada-navbar';

describe('NadaNavbar', () => {
  let component: NadaNavbar;
  let fixture: ComponentFixture<NadaNavbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NadaNavbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NadaNavbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
