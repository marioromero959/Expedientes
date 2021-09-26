import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormulariosService } from 'src/app/servicios/datos/data-pasos/formularios.service';

@Component({
  selector: 'app-comerciales',
  templateUrl: './comerciales.page.html',
  styleUrls: ['./comerciales.page.scss'],
})
export class ComercialesPage implements OnInit {

info:Array<any> = [];

  constructor(
    private router: Router,
    private formData:FormulariosService,
  ) { 
/*       this.formData.escucharData().subscribe((res) =>{
        this.info = res;
        console.log('Arreglo:',this.info);
      }); */
  }

  ngOnInit() {
  }
  nuevaHab(){
    this.router.navigate(['/comerciales/1']);
  }



}
