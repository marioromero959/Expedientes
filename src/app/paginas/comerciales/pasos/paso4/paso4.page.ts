import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paso4',
  templateUrl: './paso4.page.html',
  styleUrls: ['./paso4.page.scss'],
})
export class Paso4Page implements OnInit {
  constructor( private router:Router) { }

  ngOnInit() {
  }

  terminarP4(){
    this.router.navigate(['/comerciales/5']);
  }
}
