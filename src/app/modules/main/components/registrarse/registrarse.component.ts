import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'sofka-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.scss'],
})
export class RegistrarseComponent implements OnInit {
  constructor(public authService: AuthService) {}
  imagenreg = 'Group_213.png';
  ngOnInit(): void {}
}
