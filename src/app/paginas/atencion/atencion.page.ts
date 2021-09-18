import { Component, OnInit } from '@angular/core';
// Para tomar fotos
import { Camera, CameraResultType, ImageOptions } from '@capacitor/camera';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
// Para subir archivos
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

@Component({
  selector: 'app-atencion',
  templateUrl: './atencion.page.html',
  styleUrls: ['./atencion.page.scss'],
})
export class AtencionPage implements OnInit {

  photo: SafeResourceUrl;
  mostrar:boolean = false;
  images:string[] = [];
  archivos:string[] = [];

  constructor(
    private sanitizer: DomSanitizer,
    ) { }

  ngOnInit() {
  }

 /*  async takePicture() {

    var options:ImageOptions = {
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
    }

    Camera.getPhoto(options).then((result)=>{
      this.images.push(result.dataUrl);
    },(err)=>{
      alert(JSON.stringify(err));
    })
  } */
  

}
