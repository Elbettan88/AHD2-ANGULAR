import { Component, inject, OnInit, signal } from '@angular/core';
import { AlbumService } from '../../services/album';

@Component({
  selector: 'app-album-component',
  standalone: true,
  imports: [],
  templateUrl: './album-component.html',
  styleUrl: './album-component.css'
})
export class AlbumComponent implements OnInit {
  private albumService = inject(AlbumService);
  listaAlbumes = signal<any[]>([]);

  ngOnInit() {
    this.albumService.obtenerTodosAlbumes().subscribe({
      next: (data) => this.listaAlbumes.set(data),
      error: (err) => console.error('Error al traer álbumes:', err)
    });
  }
}
