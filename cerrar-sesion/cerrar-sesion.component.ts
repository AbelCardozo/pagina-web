import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cerrar-sesion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cerrar-sesion.component.html',
  styleUrls: ['./cerrar-sesion.component.css']
})
export class CerrarSesionComponent {
  constructor(private router: Router) {
    this.cerrarSesion();
  }

  cerrarSesion() {
    // ✅ Aquí puedes limpiar localStorage, tokens, etc.
    localStorage.clear();

    // 🔁 Redirige al inicio después de "cerrar sesión"
    this.router.navigate(['/']);
  }
}
