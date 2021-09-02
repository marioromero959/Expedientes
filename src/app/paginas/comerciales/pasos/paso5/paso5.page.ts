import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paso5',
  templateUrl: './paso5.page.html',
  styleUrls: ['./paso5.page.scss'],
})
export class Paso5Page implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  terminarP5(){
    this.router.navigate(['/comerciales/6'])
  }
  agregarAct(){}
  agregarEstudio(){}
}
