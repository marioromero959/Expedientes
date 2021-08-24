import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  passwordToggleIcon = "eye";
  showPassword = false;

  constructor(
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

goToHome(){
  this.router.navigate(['/home']);
}

goToRegister(){
  this.router.navigate(['/registro']);
}
loginGoogle(){}
}
