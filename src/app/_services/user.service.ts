import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

const API_URL = "http://localhost:8080/usuario/";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getMostrarUsuarios(): Observable<any>{
    return this.http.get(API_URL + "mostrar", {responseType: 'text'});
  }

  getMostrarPorId(): Observable<any>{
    return this.http.get(API_URL + 1, {responseType: 'text'});
  }
}
