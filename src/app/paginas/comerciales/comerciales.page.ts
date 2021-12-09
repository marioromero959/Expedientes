import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosService } from 'src/app/servicios/datos/datos.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-comerciales',
  templateUrl: './comerciales.page.html',
  styleUrls: ['./comerciales.page.scss'],
})
export class ComercialesPage implements OnInit {

  loading:any;

  dataPaso1;
  expedientes = [];
  objetoUsuario = [{'dni':null}]
  panelOpenState = false;
  arr = [ 1 , 2 ]

  constructor(
    private router: Router,
    private datos: DatosService,
    public loadingController:LoadingController
  ) {}

  ngOnInit() {
    this.presentLoading();
    const userData = JSON.parse(localStorage.getItem('Usuario'));
    this.objetoUsuario[0].dni = userData.usuario_dni;
    this.datos.obtenerExpedientes(this.objetoUsuario[0]).subscribe(res =>{
      this.expedientes[0] = res;
      this.loading.dismiss();
    })
  }
nuevaHab(){
  this.router.navigate(['/comerciales/habilitaciones']);
}

editarExp(id,expediente){
  const obj = JSON.stringify(expediente)
  localStorage.setItem('Datos Expedientes',obj);
  this.router.navigate(['/comerciales/habilitaciones'])
}

public  async presentLoading() {
  this.loading = await this.loadingController.create({
    cssClass: 'my-custom-class',
    message: 'Espere por favor...',
    backdropDismiss:true,
  });
  return this.loading.present();
}

}
