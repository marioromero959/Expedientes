import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { DatosService } from '../servicios/datos/datos.service';
import { AutenticacionService } from '../servicios/Autenticación/autenticacion.service';
import { BehaviorService } from '../behavior.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  Usuarios:any;
  userData:any;

  constructor(
    private bs: BehaviorService,
    private menu:MenuController,
    private data:DatosService,
    private auth:AutenticacionService,
    private router: Router) {
    }

  ngOnInit(){
    // obtiene todos los usuarios de mi bd
   /*  this.data.obtenerUsuarios().subscribe(res=>{
      this.Usuarios = res;
    }); */
    
    // obtiene y guarda los datos de mi usuario autenticado en userData
    this.bs.escucha().subscribe((res:any)=>{
      this.userData = res;
    })


  }


  // Abrir y cerrar menu lateral
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
  openEnd() {
    this.menu.open('end');
  }
  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

// agregar ventana de Confirmación

  borrarUsuario(id){
    console.log('borrado');
    console.log(id);
    this.data.borrarUsuario(id).subscribe();
  }

  // ver logout
logout(){
  this.auth.deleteToken();
  this.router.navigate(['/login']);
}

}
