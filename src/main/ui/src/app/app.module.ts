import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';
import {UsuariosComponent} from './usuarios/usuarios.component';
import {UsuariosListagemComponent} from './usuarios-listagem/usuarios-listagem.component';
import {UsuarioService} from './services/usuarios.service';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {ROUTES} from './app.routes';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatListModule, MatSidenavModule} from '@angular/material';
import {AdministracaoComponent} from './menu/administracao/administracao.component';
import { ContainerComponent } from './container/container.component';
import {DemoMaterialModule} from "./material-module";
import { UsuarioModalComponent } from './usuarios/usuario-modal/usuario-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UsuariosComponent,
    UsuariosListagemComponent,
    AdministracaoComponent,
    ContainerComponent,
    UsuarioModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    DemoMaterialModule,
    MatButtonModule, MatCheckboxModule, MatSidenavModule, MatListModule

  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
