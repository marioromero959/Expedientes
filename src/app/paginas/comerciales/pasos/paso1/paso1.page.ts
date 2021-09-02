import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paso1',
  templateUrl: './paso1.page.html',
  styleUrls: ['./paso1.page.scss'],
})
export class Paso1Page implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  terminarP1(){
    this.router.navigate(['/comerciales/2'])
  }
}
