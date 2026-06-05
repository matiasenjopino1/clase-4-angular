import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listado-producto',
  standalone: false,
  templateUrl: './listado-producto.html',
  styleUrl: './listado-producto.css',
})
export class ListadoProducto implements OnInit{

  constructor(private route:ActivatedRoute){

  }

  ngOnInit(): void {
   
  }
}
