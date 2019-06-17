import {Component, OnInit} from '@angular/core';
import {UsuarioService} from '../services/usuarios.service';


@Component({
  selector: 'app-usuarios-listagem',
  templateUrl: './usuarios-listagem.component.html',
  styleUrls: ['./usuarios-listagem.component.css']
})
export class UsuariosListagemComponent implements OnInit {

  usuarios: Array<any>;


  constructor(private usuarioService: UsuarioService) {
  }


  ngOnInit() {

    this.listar();
  }

  listar() {
    this.usuarioService.listar().subscribe(response => this.usuarios = response);
  }

}
