import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private http = inject(HttpClient);
  private apiUrl = "https://jsonplaceholder.typicode.com/todos";

  obtenerTodasTareas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
