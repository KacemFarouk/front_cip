import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-cip',
  templateUrl: './cip.component.html',
  styleUrls: ['./cip.component.css']
})
export class CipComponent implements OnInit {

  matricule:any;
  pts:any;
  constructor(public Rest:UserService) {
    this.pts=localStorage.getItem('pointsuser')

  }

  ngOnInit() {
  }





}
