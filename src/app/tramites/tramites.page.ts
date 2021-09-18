import { Component, OnInit } from '@angular/core';
// import { BehaviorService } from '../behavior.service';
@Component({
  selector: 'app-tramites',
  templateUrl: './tramites.page.html',
  styleUrls: ['./tramites.page.scss'],
})
export class TramitesPage implements OnInit {

  userData:any;

  constructor(
    // private be: BehaviorService
  ) { }

  ngOnInit() {
 /*      this.be.escucha().subscribe((res:any)=>{
      this.userData = res;
      console.log('Datos en tramite de userdata:', this.userData.email)
    });  */
  }


}
