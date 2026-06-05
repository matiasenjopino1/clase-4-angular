import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-producto',
  standalone: false,
  templateUrl: './detalle-producto.html',
  styleUrl: './detalle-producto.css',
})
export class DetalleProducto implements OnInit{

constructor(private route:ActivatedRoute){}

producto:any
productos = [
  {id:1,nombre:'Notebook',precio:1500},
  {id:2,nombre:'Mouse',precio:500},
  {id:3,nombre:'Teclado',precio:900}
]


ngOnInit(): void {
   const id = Number(this.route.snapshot.paramMap.get('id'))

   this.producto = this.productos.find(p => p.id === id)
}


}
