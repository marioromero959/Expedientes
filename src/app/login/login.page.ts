import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from '../servicios/autenticación/autenticacion.service';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit{

  passwordToggleIcon:string = "eye";
  showPassword:boolean = false;

  loading:any;

  ingreso:FormGroup;
  ingresado:boolean = false;

  constructor(
    private auth: AutenticacionService,
    private alertCtrl: AlertController,
    private router: Router,
    private formBuilder: FormBuilder,
    public loadingController: LoadingController,
  ){
  }

  ngOnInit(){
    this.ingreso = this.formBuilder.group({
      email: ['',Validators.required],
      pass: ['',Validators.required]
    })
  }
  // Mostrar y ocultar contraseña
public togglePass():void{
    this.showPassword =! this.showPassword;
    if(this.passwordToggleIcon == 'eye'){
      this.passwordToggleIcon = 'eye-off';
    }else{
      this.passwordToggleIcon = 'eye';
    }
};

public goToRegister():void{
  this.ingreso.reset();
  this.router.navigate(['/registro']);
}

public login():void{
  if(this.ingreso.invalid){
    this.ingreso.markAllAsTouched();
    return;
  }else{
    this.presentLoading();
    this.auth.login(this.ingreso.value.email, this.ingreso.value.pass).subscribe(
      res=>{
        this.loading.dismiss();
        (res.status === 'correcto') ? this.router.navigate(['home']) : this.presentAlert(res.status);  
      })
  }
}

public async presentAlert(error):Promise<void> {
  const alert = await this.alertCtrl.create({
    cssClass: 'my-custom-class',
    header: 'Datos Incorrectos',
    subHeader: error,
    buttons: ['OK']
  });

await alert.present();
};

public  async presentLoading() {
  this.loading = await this.loadingController.create({
    cssClass: 'my-custom-class',
    message: 'Espere por favor...',
    backdropDismiss:true,
  });
  return this.loading.present();
}

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
