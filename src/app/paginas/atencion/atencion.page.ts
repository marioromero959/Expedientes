import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atencion',
  templateUrl: './atencion.page.html',
  styleUrls: ['./atencion.page.scss'],
})
export class AtencionPage implements OnInit {

  constructor() { }

  arr = [
    {id: 1,
    name: 'mario'},
    {id: 2,
    name: 'juan'},
    {id: 3,
    name: 'jose'},
  ]

  ngOnInit() {

  }

imprimir(res){
  console.log(res)
}

}
