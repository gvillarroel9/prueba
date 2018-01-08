import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from './usuario';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuariosLista:Usuario[];
  usuarioNuevo:any={};
  idUsuario:string;
  mostrarFormulario:boolean = false;
  esNuevoUsuario:boolean;
  public confirmarEliminadoId;
  public bloque = 0;
  public pagActual=1;

  constructor(private route:ActivatedRoute, private _usuarioService:UsuarioService) { }
  
  ngOnInit() {
    /* cargamos los usuarios almacenados */ 
    this.getUsuariosPagina(1);
    //this.idUsuario = this.route.snapshot.params.id; // obtiene el id del URL
  }
  
  mostrarFormEditar(usuario:Usuario){
    if(!usuario){  /* si no hay un usuario en la variable*/
      this.mostrarFormulario = false;
      return;
    }else{
      this.mostrarFormulario = true;
      this.esNuevoUsuario = false;
      this.usuarioNuevo = usuario;
    }
  }
  mostrarFormNuevo(){
    this.usuarioNuevo = {};
    this.mostrarFormulario = !this.mostrarFormulario;
    this.esNuevoUsuario = true;
  }
  cancelar(){
    this.usuarioNuevo = {};
    this.mostrarFormulario = false;
  }
  getUsuariosPagina(pagina){
    this.pagActual = pagina;
    this._usuarioService.getUsuariosPagina(pagina-1)
                                .subscribe((response:Usuario[])=>{
                                  this.usuariosLista = response;
                                },
                                (err: any)=>{
                                  console.log("Error en usuariosComponent.",err);
                                });
  }
  guardarUsuario(usuario:Usuario){
    if (this.esNuevoUsuario){
      console.log('Creado el usuario: ', usuario.nombre);      
      
    }else{
      console.log('Modificado el usuario: ', usuario.nombre);
      // if (this.usuarioService.actualizarUsuario(usuario)){
      //   console.log("Se GUARDO");
      // }else {
      //   console.log("NO GUARDO");
      // }
    }
    this.mostrarFormulario = false;
  }
  
  onDeleteUsuario(id){
    this._usuarioService.deleteUsuario(id).subscribe(
      res => {
        console.log(res);
        this.getUsuariosPagina(1);  
      },
      err => {
        alert("Error borrando el usuario");
        console.log(<any>err);
      }
    );
  }
  confirmarEliminar(id){
    this.confirmarEliminadoId = id;
  }
  cancelarEliminar(){
    this.confirmarEliminadoId = null;
  }
  incrementarBloquePag(){
    this.bloque+=5;
  }
  decrementarBloquePag(){
    this.bloque-=5;
  }
}
