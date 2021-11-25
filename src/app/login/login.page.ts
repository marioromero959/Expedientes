import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from '../servicios/Autenticación/autenticacion.service';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit{

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
      email: ['',Validators.required],
      pass: ['',Validators.required]
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
    this.auth.login(this.ingreso.value.email, this.ingreso.value.pass).subscribe(
      res=>{
        (res.status === 'correcto') ? this.router.navigate(['home']) : this.presentAlert(res.status);  
      })
  }
}

async presentAlert(error) {
  const alert = await this.alertCtrl.create({
    cssClass: 'my-custom-class',
    header: 'Datos Incorrectos',
    subHeader: error,
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

ionViewDidLeave(){
  this.ingreso.reset()
}

}
