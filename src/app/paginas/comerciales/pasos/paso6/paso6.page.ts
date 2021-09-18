import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-paso6',
  templateUrl: './paso6.page.html',
  styleUrls: ['./paso6.page.scss'],
})
export class Paso6Page implements OnInit {
  
  public archivos:any = [];
  
  constructor(
    private router:Router,
    private alertCtrl:AlertController,) { 
    }

  ngOnInit() {
  }


select(event){
  var reader = new FileReader();
  const self = this.archivos;
  const archivoCapturado = event.target.files[0];
  if(archivoCapturado){
    reader.readAsDataURL(archivoCapturado); 
    reader.onloadend = function() {
        var base64data = reader.result;
        self.push(base64data);
      };
  }else{
    console.log('err')
  }
}

terminarP6(){
  this.router.navigate(['/comerciales'])
};


async presentAlert() {
  const alert = await this.alertCtrl.create({
    cssClass: 'my-custom-class',
    header: 'Datos Incompletos',
    subHeader: 'Por favor, complete todos los campos para continuar.',
    buttons: ['OK']
  });
await alert.present();
};

}
