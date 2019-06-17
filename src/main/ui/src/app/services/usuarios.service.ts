import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private Url = '/rest/contatos'

  constructor(private http: HttpClient) {
  }

  listar() {
    return this.http.get<any[]>(`${this.Url}` + '/listar')
  }
}
