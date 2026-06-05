import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoProducto } from './listado-producto';

describe('ListadoProducto', () => {
  let component: ListadoProducto;
  let fixture: ComponentFixture<ListadoProducto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListadoProducto],
    }).compileComponents();

    fixture = TestBed.createComponent(ListadoProducto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
