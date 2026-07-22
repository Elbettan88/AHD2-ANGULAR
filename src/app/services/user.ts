import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http = inject(HttpClient);
  private apiUrl = "https://jsonplaceholder.typicode.com/users"; 

  /* Metodo para obtener todos los usuarios de la API JSONPlaceholder */
  obtenerTodosUsuarios(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.apiUrl); 
  }
}



