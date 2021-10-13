import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from '../servicios/Autenticación/autenticacion.service';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {

  passwordToggleIcon = "eye";
  showPassword = false;

  ingreso:FormGroup;
  ingresado = false;

  constructor(
    private auth: AutenticacionService,
    private alertCtrl: AlertController,
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
  this.ingreso.reset();
  this.router.navigate(['/registro']);
}

login(){
  if(this.ingreso.invalid){
    this.ingreso.markAllAsTouched();
    return;
  }else{
    this.auth.userlogin(this.ingreso.value.email , this.ingreso.value.pass).subscribe(
    res=>{
      this.ingreso.reset();
      this.router.navigate(['/home']);
    },
    error=>{
      this.presentAlert();
    });
  }
}

async presentAlert() {
  const alert = await this.alertCtrl.create({
    cssClass: 'my-custom-class',
    header: 'Datos Incorrectos',
    subHeader: 'El usuario y/o contraseña ingresados son incorrectos.',
    buttons: ['OK']
  });

await alert.present();
};

// obtener campos
get emailField(){
  return this.ingreso.get('email');
}
get passwordField(){
  return this.ingreso.get('pass');
}

ngOnDestroy(){}
}
