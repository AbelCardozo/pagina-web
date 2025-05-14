import { Component, importProvidersFrom } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule} from '@angular/common';
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
  error: string = '';

  constructor(private router: Router) {}

  iniciarSesion() {
    if (this.user === 'admin' && this.password === '1234') {
      localStorage.setItem('usuarioActivo', this.user);
      this.router.navigate(['/']);
    } else {
      this.error = 'Usuario o contraseña incorrectos.';
    }
  }
}
