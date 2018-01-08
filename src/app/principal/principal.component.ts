import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor() { 
    setTimeout(() => {
      this.valor = this.valor + 10;
    }, 2000);
  }

  ngOnInit() {
  }
  valor = 10;
  activo:boolean = false;
  textoSalida = "Escribe en el recuadro";
  datoModelo = "";

  teclaPresionada($event){
    this.textoSalida = $event.target.value;
  }

  cambiar(){
    this.activo = !this.activo;
  }
  
}
