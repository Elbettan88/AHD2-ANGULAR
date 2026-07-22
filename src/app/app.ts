import { Component, signal } from '@angular/core';
import { UserComponent } from './pages/user-component/user-component';
// Usamos el nombre exacto de la clase: UserComponent



@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [UserComponent], // Nombre de clase corregido aquí
})
export class App {
  title = signal('Mi Aplicación Angular');
}
