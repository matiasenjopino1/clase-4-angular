import { Component, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('clase-4');

  constructor(private router:Router) {

  }
  ngOnInit(): void {
    const ultimaRuta =  localStorage.getItem('moduloUltimo')
    if(ultimaRuta)
      this.router.navigateByUrl(ultimaRuta)
  }

  guardarModulo(modulo:any){
    localStorage.setItem('moduloUltimo',modulo)
  }
}
