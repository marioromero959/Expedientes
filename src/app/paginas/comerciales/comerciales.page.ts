import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormulariosService } from 'src/app/servicios/datos/data-pasos/formularios.service';
import { DatosService } from 'src/app/servicios/datos/datos.service';

@Component({
  selector: 'app-comerciales',
  templateUrl: './comerciales.page.html',
  styleUrls: ['./comerciales.page.scss'],
})
export class ComercialesPage implements OnInit {

  dataPaso1;
  expedientes = [];
  objetoUsuario = [{'dni':null}]

  constructor(
    private router: Router,
    private datos: DatosService,
    private formData:FormulariosService,
  ) {}

  ngOnInit() {
    const userData = JSON.parse(localStorage.getItem('Usuario'));
    this.objetoUsuario[0].dni = userData.usuario_dni;
    this.datos.obtenerExpedientes(this.objetoUsuario[0]).subscribe(res =>{
      this.expedientes[0] = res;
    })

    this.formData.escucharData().subscribe((res) =>{
    if(res){
      this.dataPaso1 = res[0];
    }else{
      this.dataPaso1 = '';
    }
    });
  }
nuevaHab(){
  this.router.navigate(['/comerciales/1']);
}

}
