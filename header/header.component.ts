import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  usuarioLogueado: boolean = false;

  ngOnInit(): void {
    this.usuarioLogueado = !!localStorage.getItem('usuarioActivo');
  }
}
