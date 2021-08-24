import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AutenticacionService } from '../servicios/Autenticación/autenticacion.service';
import { DatosService } from '../servicios/datos/datos.service';
import { Usuario } from '../shared/interface/interfaz-de-usuario';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  Usuarios:any;

  constructor(
    private menu:MenuController,
    private data:DatosService,
    private router: Router) {
    }

  ngOnInit(){
    this.data.obtenerUsuarios().subscribe(res=>{
      this.Usuarios=res;
    });
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



logout(){
  this.router.navigate(['/login']);
}

}
