import {Routes} from '@angular/router';
import {UsuariosListagemComponent} from './usuarios-listagem/usuarios-listagem.component';
import {UsuariosComponent} from './usuarios/usuarios.component';
import {AdministracaoComponent} from './menu/administracao/administracao.component';


export const ROUTES: Routes = [
  {path: '', component: UsuariosComponent},
  {path: 'contatos', component: UsuariosListagemComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'administracao', component: AdministracaoComponent}


];
