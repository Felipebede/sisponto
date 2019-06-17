import {Component, OnInit, ViewChild} from '@angular/core';
import {UsuarioService} from "../services/usuarios.service";
import {MatDialog, MatSort, MatTableDataSource} from "@angular/material";
import {UsuarioModel} from "./usuario.model";
import {UsuarioModalComponent} from "./usuario-modal/usuario-modal.component";

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  dataSource: any;
  usuarios: UsuarioModel[];
  displayedColumns: string[] = ['id', 'nome', 'cpf', 'acoes'];


  constructor(private usuarioService: UsuarioService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.listar();

  }

  @ViewChild(MatSort, {static: true}) sort: MatSort;


  listar() {
    this.usuarioService.listar().subscribe(response => [
      this.usuarios = response,
      this.dataSource = new MatTableDataSource(this.usuarios),
      this.dataSource.sort = this.sort,
    ]);
  }

  editar(){
    console.log('editar');
  }

  abrirModal(){
    const dialogRef = this.dialog.open(UsuarioModalComponent, {  height: '400px',
      width: '600px',})
  }

}
