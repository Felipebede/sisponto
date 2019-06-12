import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {UsuariosListagemComponent} from './usuarios-listagem/usuarios-listagem.component';
import {UsuarioService} from "./services/usuario.service";
import { UsuariosComponent } from './usuarios/usuarios.component';
import {ROUTES} from "./app.routes";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    UsuariosListagemComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
