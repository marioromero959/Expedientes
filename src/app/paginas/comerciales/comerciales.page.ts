import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comerciales',
  templateUrl: './comerciales.page.html',
  styleUrls: ['./comerciales.page.scss'],
})
export class ComercialesPage implements OnInit {

  constructor(
    private router: Router,
  ) { 
    
  }

  ngOnInit() {
  }
  nuevaHab(){
    this.router.navigate(['/comerciales/1']);
  }

}
