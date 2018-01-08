import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { UsuarioService } from '../../../usuario.service';
import { Usuario } from '../../../usuarios/usuario';

@Component({
  selector: 'app-usuario-add',
  templateUrl: './usuario-add.component.html',
  styleUrls: ['./usuario-add.component.css'],
  providers:[ 
    UsuarioService
  ]
})
export class UsuarioAddComponent implements OnInit {
  public titulo: string;
  public usuario: Usuario;
  
  constructor(
    private _router: Router, 
    private _usuarioService: UsuarioService
  ) { 
    this.titulo = "Nuevo usuario";
    this.usuario = new Usuario(0,'','','','');
  }

  ngOnInit() {
  }

  onSubmit(){
    this._usuarioService.addUsuario(this.usuario).subscribe(
      res => {
          this._router.navigate(['/usuarios']);
      },
      err => {
        console.log("ERROR CREANDO USUARIO");
      }
    );
  }
}