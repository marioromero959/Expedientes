import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from '../servicios/Autenticación/autenticacion.service';

@Component({
  selector: 'app-recuperar-pass',
  templateUrl: './recuperar-pass.page.html',
  styleUrls: ['./recuperar-pass.page.scss'],
})
export class RecuperarPassPage implements OnInit {

  constructor(
    private auth: AutenticacionService,
    private router: Router,
  ) { }

  ngOnInit() {
  }
  async resetPass(email){
    try {
      await this.auth.resetpassword(email.value);
      this.router.navigate(['/login']);
    } catch (error) {
      console.log(error);
    }
  }
}
