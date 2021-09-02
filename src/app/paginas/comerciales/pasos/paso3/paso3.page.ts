import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paso3',
  templateUrl: './paso3.page.html',
  styleUrls: ['./paso3.page.scss'],
})
export class Paso3Page implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
terminarP3(){
  this.router.navigate(['/comerciales/4'])
}
}
