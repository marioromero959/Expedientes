import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistroService } from '../servicios/registro/registro.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { User } from '../shared/interface/interfaz-usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  crearUsuarios: FormGroup;
  passwordToggleIcon:string = "visibility";
  rePasswordToggleIcon:string = "visibility";
  showPassword:boolean = false;
  showRePassword:boolean = false;
  loading:any;

  constructor(
    private router:Router,
    private fb:FormBuilder,
    private _registro:RegistroService,
    private alertCtrl:AlertController,
    public loadingController: LoadingController,
  ) {
    this.crearUsuarios = this.fb.group({
      usuario:['',Validators.required],
      dni:['',Validators.required],
      nombre:['',Validators.required],
      apellido:['',Validators.required],
      email:['',Validators.required],
      pass:['',Validators.required],
      repass:['',Validators.required],
    })
  }

  ngOnInit() {}

  // mostrar u ocultar contraseña
 public togglePass():void{
    this.showPassword =! this.showPassword;
    if(this.passwordToggleIcon == 'visibility'){
      this.passwordToggleIcon = 'visibility_off';
    }else{
      this.passwordToggleIcon = 'visibility';
    }
  };
 public toggleRePass():void{
    this.showRePassword =! this.showRePassword;
    if(this.rePasswordToggleIcon == 'visibility'){
      this.rePasswordToggleIcon = 'visibility_off';
    }else{
      this.rePasswordToggleIcon = 'visibility';
    }
  };

  public registrarUsuario():void{
    if(this.crearUsuarios.invalid){
      this.crearUsuarios.markAllAsTouched();
      this.presentAlert('Por favor, complete los campos para continuar')
      return;
    }else{
    //Envio la data al back
    this.presentLoading();
    const usuario:User = this.crearUsuarios.value; 
    this._registro.altaUsuario(usuario).subscribe((res:any)=>{
      this.loading.dismiss();
      const {status} = res;
      (status !== 'correcto') ? this.presentAlert(status) : this.router.navigate(['/verificacion']);
      });
    } 
  }

public async presentAlert(error):Promise<void> {
  const alert = await this.alertCtrl.create({
    cssClass: 'my-custom-class',
    header: 'Ocurrió un problema',
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

public irALogin(){
  this.router.navigate(['/login']);
}

ionViewWillLeave(){
  this.crearUsuarios.reset(); 
}

}
