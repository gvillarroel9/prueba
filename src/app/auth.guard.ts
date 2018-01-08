import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UsuarioService } from './usuario.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private usuarioService: UsuarioService, private router:Router){}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    var autenticado = this.usuarioService.getUsuarioLogueado();
    if (!autenticado)
      this.router.navigate(['/']);
    return this.usuarioService.getUsuarioLogueado();
  }
}
