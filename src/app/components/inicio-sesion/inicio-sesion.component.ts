import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inicio-sesion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {
  user: string = '';
  password: string = '';

  iniciarSesion() {
    console.log('Usuario:', this.user);
    console.log('Contraseña:', this.password);
    alert('Inicio de sesión simulado');
  }
}
