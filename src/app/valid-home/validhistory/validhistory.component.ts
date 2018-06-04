/*
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validhistory',
  templateUrl: './validhistory.component.html',
  styleUrls: ['./validhistory.component.css']
})
export class ValidhistoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

*/
import { Component, OnInit } from '@angular/core';
import {CipService} from '../../services/cip.service';

@Component({
  selector: 'app-validhistory',
  templateUrl: './validhistory.component.html',
  styleUrls: ['./validhistory.component.css']
})
export class ValidhistoryComponent implements OnInit {
  cips:any;

  constructor(public Rest:CipService) {

    this.getAllCips();
  }

  ngOnInit() {
  }

  getAllCips(){

    this.cips=this.Rest.getAllCip();

    console.log(this.cips)
  }
}
