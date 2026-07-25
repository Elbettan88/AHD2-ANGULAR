import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink], // <-- Verifica que RouterLink esté aquí
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'ahd2';
}
