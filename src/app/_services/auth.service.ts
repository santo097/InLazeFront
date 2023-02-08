import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:3000/usuario/';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login (credentials): Observable<any>{
    return this.http.post(AUTH_API + "iniciarsesion" ,{
      usuario:credentials.usuario,
      contraseña:credentials.contraseña
    }, httpOptions);
  }

  register(user): Observable<any>{
    return this.http.post(AUTH_API + 'crear',{
      usuario: user.usuario,
      contraseña: user.contraseña,
      informacionusuarioID:1,
      roleID:user.roleID
    }, httpOptions);
  }
}
