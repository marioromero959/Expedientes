import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comprobante',
  templateUrl: './comprobante.page.html',
  styleUrls: ['./comprobante.page.scss'],
})
export class ComprobantePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  irAHome(){
    this.router.navigate(['/home']);
  }
}
