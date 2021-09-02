import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paso6',
  templateUrl: './paso6.page.html',
  styleUrls: ['./paso6.page.scss'],
})
export class Paso6Page implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  terminarP5(){
    this.router.navigate(['/comerciales']);
  }

}
