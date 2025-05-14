import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registrarse',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent {
  user: string = '';
  email: string = '';
  password: string = '';

  registrar() {
    console.log('Usuario:', this.user);
    console.log('Email:', this.email);
    console.log('Contraseña:', this.password);
    alert('Registro simulado');
  }
}

