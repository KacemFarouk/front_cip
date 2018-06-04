import { Component, OnInit } from '@angular/core';
import {CipService} from '../../../services/cip.service';

@Component({
  selector: 'app-historique-cip',
  templateUrl: './historique-cip.component.html',
  styleUrls: ['./historique-cip.component.css']
})
export class HistoriqueCipComponent implements OnInit {
  cips: any;
  numero: any;
  test: boolean;
  description: any;
  natureGain: any;
  collaborateurs:any;
  matricule:any;
  matriculeuser : any ;
  gain:any;
  points:any;
  etat:any;
  date:any;
  valeurGain:any;
  controlling:any;
  constructor(public Rest: CipService,public Re:CipService) {
      this.matriculeuser=localStorage.getItem('matriculeuser')
    this.getAllCips();
    this.removecip(this.numero);
    this.update(this.numero,this.description, this.natureGain);
    this.test = false;
  }

  ngOnInit() {
  }

  getAllCips() {

    this.cips = this.Rest.getCipByMatricule(this.matriculeuser);

    console.log(this.cips)

  }

  removecip(numero) {

    this.Rest.removecip(numero).subscribe(res => {

      this.getAllCips();

    }, error2 => {

      //this.getAllUsers();

    });

    this.getAllCips();


  }


  details(numero,collaborateurs,matricule,description,natureGain,valeurGain,points,date,etat){
    this.numero=numero;
    this.collaborateurs=collaborateurs;
    this.matricule=matricule;
    this.description=description;
    this.natureGain=natureGain;
    this.valeurGain=valeurGain;
    this.points=points;
    this.date=date;
    this.etat=etat;
  }


  edit(numero,description, natureGain) {
    this.test = true;

    this.description = description;
    this.natureGain = natureGain;
    }

  update(numero,description, natureGain) {

    this.Re.update(numero,description,natureGain).subscribe(Re => {
      this.getAllCips()
    }, error2 => {

      this.getAllCips();

    });
    this.getAllCips()

//this.users = this.Rest.getusers();


    this.test = false;
  }

}
