import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private http = inject(HttpClient);
  private apiUrl = "https://jsonplaceholder.typicode.com/comments";

  obtenerTodosComentarios(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
