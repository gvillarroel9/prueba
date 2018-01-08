import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { UsuarioService } from '../../../usuario.service';
import { Usuario } from '../../../usuarios/usuario';

@Component({
  selector: 'app-usuario-detail',
  templateUrl: './usuario-detail.component.html',
  styleUrls: ['./usuario-detail.component.css'],
  providers:[
    UsuarioService
  ]
})
export class UsuarioDetailComponent implements OnInit {
  public usuario: Usuario;
  public titulo: string;
  constructor(
    private _router: Router, 
    private _route: ActivatedRoute,
    private _usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.titulo = "Detalle usuario";
    this.getUsuario();
  }

  getUsuario(){
    this._route.params.forEach((params: Params) => {
      let id = params['id'];
      this._usuarioService.getUsuario(id).subscribe(
        res =>{
            this.usuario = res;          
        },
        err =>{
          console.log(<any>err);
        }
      );
    });
  }

}