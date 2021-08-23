import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from '../servicios/Autenticación/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email;
  password;
  isVerified;
  passwordToggleIcon = "eye";
  showPassword = false;

  constructor(
    private auth: AutenticacionService,
    private router: Router
  ) { }

  ngOnInit() {
  }
// Mostrar y ocultar contraseña
  togglePass(){
    this.showPassword =! this.showPassword;
    if(this.passwordToggleIcon == 'eye'){
      this.passwordToggleIcon = 'eye-off';
    }else{
      this.passwordToggleIcon = 'eye';
    }
  };

  async onLogin(email, password){
    try{
      const user = await this.auth.login(email.value, password.value);
      if(user){
        const isVerified = this.auth.emailVerified(user);
        this.redirectUser(isVerified);
      }
    }
    catch(error){
      console.log(error);
    }
  }
async onLoginGoogle(){
  try{
    const user = await this.auth.loginGoogle();
    if(user){
      const isVerified = this.auth.emailVerified(user);
      this.redirectUser(isVerified);
    }
  }
  catch(error){
    console.log(error);
  }
}

redirectUser(isVerified:boolean){
  if(isVerified){
    this.router.navigate(['/home']);
  }else{
    this.router.navigate(['/verificacion']);
  }
}

goToRegister(){
  this.router.navigate(['/registro']);
}
}
