import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormulariosService } from 'src/app/servicios/datos/data-pasos/formularios.service';

@Component({
  selector: 'app-comerciales',
  templateUrl: './comerciales.page.html',
  styleUrls: ['./comerciales.page.scss'],
})
export class ComercialesPage implements OnInit {

  dataPaso1;

  constructor(
    private router: Router,
    private formData:FormulariosService,
  ) {}

  ngOnInit() {
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
