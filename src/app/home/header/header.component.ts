import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
nom:any;
prenom:any;
  constructor() {
    this.nom=localStorage.getItem('nom')
    this.prenom=localStorage.getItem('prenom')

  }

  ngOnInit() {
  }

}
