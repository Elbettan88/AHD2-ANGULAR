import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../services/user';
import { UserModel } from '../../models/user';

@Component({
  selector: 'app-user-component',
  imports: [],
  templateUrl: './user-component.html',
  styleUrl: './user-component.css',
})
export class UserComponent implements OnInit{

  private servicioUsuario = inject(UserService)

  usuarios: UserModel[] = [];

  ngOnInit(): void {
    this.servicioUsuario.obtenerTodosUsuarios().subscribe({
      next: (datos)=> {
        this.usuarios = datos;
      }
    })
  }

}
