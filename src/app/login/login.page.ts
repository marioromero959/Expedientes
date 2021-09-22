import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from '../servicios/Autenticación/autenticacion.service';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { first } from 'rxjs/operators';

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

  datos ={
    id: null,
    email: null,
    password: null
  }
  userData:any = [];

  constructor(
    private auth: AutenticacionService,
    private router: Router,
    private formBuilder: FormBuilder,
  ){}

  ngOnInit() {

    this.ingreso = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required,Validators.minLength(6)]]
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
/*   if(this.ingreso.invalid){
    this.ingreso.markAllAsTouched();
    return;
  }else{
    this.ingresado = true;
    this.iniciar(this.ingreso);
  } */
  this.router.navigate(['/home']);
}

iniciar(ingreso){
  this.auth.userLogin(ingreso.value.email, ingreso.value.password).pipe(first()).subscribe(data =>{
    const userDatos = data;
    this.router.navigate(['/home']);
  } )
}
// obtener campos
get emailField(){
  return this.ingreso.get('email');
}
get passwordField(){
  return this.ingreso.get('password');
}

}
