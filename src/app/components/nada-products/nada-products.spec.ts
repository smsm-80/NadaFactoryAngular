import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NadaProducts } from './nada-products';

describe('NadaProducts', () => {
  let component: NadaProducts;
  let fixture: ComponentFixture<NadaProducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NadaProducts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NadaProducts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
