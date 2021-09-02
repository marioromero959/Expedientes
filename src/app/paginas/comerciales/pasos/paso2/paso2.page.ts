import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paso2',
  templateUrl: './paso2.page.html',
  styleUrls: ['./paso2.page.scss'],
})
export class Paso2Page implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {}

  terminarP2(){
    this.router.navigate(['/comerciales/3'])
  }
}
