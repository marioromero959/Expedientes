import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacionService } from '../servicios/Autenticación/autenticacion.service';
import { Usuario } from '../shared/interface/interfaz-de-usuario';

@Component({
  selector: 'app-verificacion',
  templateUrl: './verificacion.page.html',
  styleUrls: ['./verificacion.page.scss'],
})
export class VerificacionPage implements OnInit, OnDestroy {

  user$:Observable<Usuario>;

  constructor(
    private auth: AutenticacionService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async onSendEmail():Promise<void>{
    try {
    await this.auth.sendVerificacion();
      this.router.navigate(['/login']);
    } catch (error) {
      console.log(error.message);
    }
  }

  ngOnDestroy():void {
    this.auth.logout();
  }
}
