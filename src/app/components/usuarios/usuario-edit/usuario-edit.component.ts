import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { UsuarioService } from '../../../usuario.service';
import { Usuario } from '../../../usuarios/usuario';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css'],
  providers:[
    UsuarioService
  ]
})
export class UsuarioEditComponent implements OnInit {
  public usuario: Usuario;
  public titulo: string;
  constructor(
    private _router: Router, 
    private _route: ActivatedRoute,
    private _usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.titulo = "Editar usuario";
    this.editUsuario();
  }

  editUsuario(){
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

  onSubmit(){
    this._usuarioService.editUsuario(this.usuario.id, this.usuario).subscribe(
      res => {
          console.log("USUARIO MODIFICADO");
          this._router.navigate(['/usuarios']);
      },
      err => {
        console.log("ERROR MODIFICANDO USUARIO");
      }
    );
  }
}
