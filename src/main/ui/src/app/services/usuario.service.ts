import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  contatosUrl = 'Http://localhost:8080/rest/contatos'


  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<any[]>(`${this.contatosUrl}`+'/listar')
  }
}
