import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private usuarioService:UsuarioService) { }
  usuario: string;
  ngOnInit() {
    this.usuario = this.usuarioService.getNombreUsuario();
  }

}
