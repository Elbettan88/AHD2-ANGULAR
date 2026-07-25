import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private http = inject(HttpClient);
  private apiUrl = "https://jsonplaceholder.typicode.com/albums";

  obtenerTodosAlbumes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
