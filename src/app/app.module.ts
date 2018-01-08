import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule} from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

// Enrutamiento
import { routing, appRoutingProviders} from './app.routing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FooterComponent } from './footer/footer.component';
import { PrincipalComponent } from './principal/principal.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { MenuComponent } from './menu/menu.component';

import { UsuarioService } from './usuario.service'
import { AuthGuard } from './auth.guard';
import { NoencontradoComponent } from './noencontrado/noencontrado.component';
import { UsuarioAddComponent } from './components/usuarios/usuario-add/usuario-add.component';
import { UsuarioDetailComponent } from './components/usuarios/usuario-detail/usuario-detail.component';
import { UsuarioEditComponent } from './components/usuarios/usuario-edit/usuario-edit.component';
import { ProductosComponent } from './components/productos/productos/productos.component';
import { ProductoService } from './services/producto/producto.service';
import { RegistroComponent } from './components/registro/registro.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent,
    FooterComponent,
    PrincipalComponent,
    UsuariosComponent,
    MenuComponent,
    NoencontradoComponent,
    UsuarioAddComponent,
    UsuarioDetailComponent,
    UsuarioEditComponent,
    ProductosComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    AlertModule.forRoot(),
    routing
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    UsuarioService, 
    ProductoService,
    appRoutingProviders,
    AuthGuard 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
