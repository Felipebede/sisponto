import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {UsuariosListagemComponent} from './usuarios-listagem/usuarios-listagem.component';
import {UsuarioService} from "./services/usuario.service";

@NgModule({
  declarations: [
    AppComponent,
    UsuariosListagemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
