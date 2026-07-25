import { Component, inject, OnInit, signal } from '@angular/core';
import { TodoService } from '../../services/todo';

@Component({
  selector: 'app-todo-component',
  standalone: true,
  imports: [],
  templateUrl: './todo-component.html',
  styleUrl: './todo-component.css'
})
export class TodoComponent implements OnInit {
  private todoService = inject(TodoService);
  listaTareas = signal<any[]>([]);

  ngOnInit() {
    this.todoService.obtenerTodasTareas().subscribe({
      next: (data: any[]) => this.listaTareas.set(data),
      error: (err: any) => console.error('Error al traer tareas:', err)
    });
  }
}
