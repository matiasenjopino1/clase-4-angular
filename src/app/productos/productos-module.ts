import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing-module';
import { ListadoProducto } from './listado-producto/listado-producto';
import { DetalleProducto } from './detalle-producto/detalle-producto';

@NgModule({
  declarations: [ListadoProducto, DetalleProducto],
  imports: [CommonModule, ProductosRoutingModule],
})
export class ProductosModule {}
