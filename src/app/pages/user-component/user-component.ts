import { Component, inject, OnInit, signal } from '@angular/core';
import { UserService } from '../../services/user';
import { Title, Meta } from '@angular/platform-browser'; // <-- Faltaba esto

@Component({
  selector: 'app-user-component',
  standalone: true,
  imports: [],
  templateUrl: './user-component.html',
  styleUrl: './user-component.css'
})
export class UserComponent implements OnInit {
  private userService = inject(UserService);
  private titleService = inject(Title); // <-- Faltaba esto
  private metaService = inject(Meta);   // <-- Faltaba esto
  
  listaUsuarios = signal<any[]>([]);

  ngOnInit() {
    // Configuración SEO de la página
    this.titleService.setTitle('Lista de Usuarios Optimizada - SEO');
    this.metaService.updateTag({ name: 'description', content: 'Listado de usuarios consumido dinámicamente desde API externa.' });

    this.userService.obtenerTodosUsuarios().subscribe({
      next: (data) => this.listaUsuarios.set(data),
      error: (err) => console.error('Error al traer usuarios:', err)
    });
  }
}
