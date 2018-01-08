import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private router:Router, private usuarioService:UsuarioService) { }

  ngOnInit() {
  }
  loginUser(e){
    e.preventDefault();
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    if (username == "admin" && password == "x"){
      this.usuarioService.setUsuarioLogueado();
      this.usuarioService.setNombreUsuario(username);
      this.router.navigate(['principal']);
    }
    return false;
  }
}
