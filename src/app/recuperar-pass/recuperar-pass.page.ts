import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-recuperar-pass',
  templateUrl: './recuperar-pass.page.html',
  styleUrls: ['./recuperar-pass.page.scss'],
})
export class RecuperarPassPage implements OnInit {

  email = new FormControl('');

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }
  resetPass(){
    console.log(this.email.value)
    // enviar email para recuperacion
    this.email.reset()
    this.router.navigate(['/login'])
  }
}
