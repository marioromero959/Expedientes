import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from './servicios/Autenticación/autenticacion.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private auth: AutenticacionService,
    private router: Router,
  ) {
  }
  logout(){
    this.auth.deleteToken();
    this.router.navigate(['/login']);
  }
}
