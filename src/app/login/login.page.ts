import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from '../servicios/Autenticación/autenticacion.service';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  passwordToggleIcon = "eye";
  showPassword = false;

  ingreso:FormGroup;
  ingresado = false;

  constructor(
    private auth: AutenticacionService,
    private router: Router,
    private formBuilder: FormBuilder,
  ){}

  ngOnInit() {
    this.ingreso = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
      pass: ['',[Validators.required,Validators.minLength(6)]]
    })
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

goToRegister(){
  this.router.navigate(['/registro']);
}

login(){
  if(this.ingreso.invalid){
    this.ingreso.markAllAsTouched();
    return;
  }else{
    console.log(this.ingreso.value.email)
    this.auth.seleccionarUsuario(2).subscribe(res=>{
      const user = res[0];
      console.log('Usuario seleccionado',user.email, user.pass)
    })
  }
  // this.router.navigate(['/home']);
}

// obtener campos
get emailField(){
  return this.ingreso.get('email');
}
get passwordField(){
  return this.ingreso.get('pass');
}
}
