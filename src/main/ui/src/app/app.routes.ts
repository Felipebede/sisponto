import {Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {UsuariosListagemComponent} from "./usuarios-listagem/usuarios-listagem.component";
import {UsuariosComponent} from "./usuarios/usuarios.component";


export const ROUTES: Routes = [
  {path: '', component: AppComponent},
  {path: 'contatos', component: UsuariosListagemComponent},
  {path: 'usuarios', component: UsuariosComponent}


]
