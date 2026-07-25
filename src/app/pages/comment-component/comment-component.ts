import { Component, inject, OnInit, signal } from '@angular/core';
import { CommentService } from '../../services/comment';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-comment-component',
  standalone: true,
  imports: [],
  templateUrl: './comment-component.html',
  styleUrl: './comment-component.css'
})
export class CommentComponent implements OnInit {
  private commentService = inject(CommentService);
  private titleService = inject(Title);
  private metaService = inject(Meta);
  
  listaComentarios = signal<any[]>([]);

  ngOnInit() {
    this.titleService.setTitle('Comentarios del Blog - Optimizado SEO');
    this.metaService.updateTag({ name: 'description', content: 'Retroalimentación de la comunidad indexable por buscadores.' });

    this.commentService.obtenerTodosComentarios().subscribe({
      next: (data: any) => this.listaComentarios.set(data),
      error: (err: any) => console.error('Error al traer comentarios:', err)
    });
  }
}
