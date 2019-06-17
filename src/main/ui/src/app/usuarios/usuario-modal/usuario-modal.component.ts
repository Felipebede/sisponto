import {Component, OnInit} from '@angular/core';
import {UsuarioModel} from "../usuario.model";

@Component({
  selector: 'app-usuario-modal',
  templateUrl: './usuario-modal.component.html',
  styleUrls: ['./usuario-modal.component.css']
})
export class UsuarioModalComponent implements OnInit {

  usuarioModal = UsuarioModel;

  constructor() {
  }

  ngOnInit() {
  }

  onNoClick(): void {
    // this.dialogRef.close();
  }

}
