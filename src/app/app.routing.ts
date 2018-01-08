import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AuthGuard } from './auth.guard';
import { PrincipalComponent } from './principal/principal.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioAddComponent } from './components/usuarios/usuario-add/usuario-add.component';
import { UsuarioDetailComponent } from './components/usuarios/usuario-detail/usuario-detail.component';
import { UsuarioEditComponent } from './components/usuarios/usuario-edit/usuario-edit.component';
import { ProductosComponent } from './components/productos/productos/productos.component';
import { RegistroComponent } from './components/registro/registro.component';
import { NoencontradoComponent } from './noencontrado/noencontrado.component';


const appRoutes:Routes = [
  {
    path: '',
    component: LoginFormComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'principal',
    canActivate: [AuthGuard],
    component: PrincipalComponent
  },
  {
    path: 'usuarios',
    // canActivate: [AuthGuard],
    component: UsuariosComponent
  },
  {
    path: 'usuarioAdd',
    component: UsuarioAddComponent
  },
  {
    path:'usuario/:id',
    component: UsuarioDetailComponent
  },
  {
    path:'usuarioEdit/:id',
    component: UsuarioEditComponent
  },
  {
    path:'productos',
    component: ProductosComponent
  },
  {
    path: '**',
    component: NoencontradoComponent
  }
]

export const appRoutingProviders: any [] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);