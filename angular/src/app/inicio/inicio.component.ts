import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images = [
    {path: '/assets/1.jpg'},
    {path: '/assets/2.jpg'},
    {path: '/assets/3.jpg'},
    {path: '/assets/4.jpg'},
    {path: '/assets/5.png'}
]

}
