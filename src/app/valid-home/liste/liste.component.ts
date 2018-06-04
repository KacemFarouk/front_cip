
import { Component, OnInit } from '@angular/core';
import {CipService} from '../../services/cip.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {


  cips:any;
matricule:any ;
service : any ;
statut: any ;
gain : any ;
points:any ;
  numero:any;collaborateurs:any;date:any;description:any;etat:any;natureGain:any;
  constructor(public Rest:CipService) {

   this.matricule= localStorage.getItem('matricule')
    this.service=localStorage.getItem('service')
    this.statut=localStorage.getItem('statut')

    console.log(this.matricule)

    if(this.statut == "controlling"){
      this.getcipcontrolling(this.matricule);
    }

    if(this.statut == "head of controlling"){
      this.getcipheadofcontrolling()
    }
    if(this.statut == "directeur"){
      this.getcipdirecteur()
    }

  }

  ngOnInit() {
  }




  getcipcontrolling(matricule){
    this.cips=this.Rest.getcipcontrolling(matricule) ;

    console.log(this.cips)

  }

  getcipheadofcontrolling(){
    this.cips=this.Rest.getcipheadofcontrolling();

    console.log(this.cips)


  }

  getcipdirecteur(){
    this.cips=this.Rest.getcipdirecteur();

    console.log(this.cips)


  }

  go(numero,collaborateurs,matricule,date,description,etat,natureGain){

    this.numero =numero ;
    this.collaborateurs=collaborateurs;
    this.matricule=matricule;
    this.date=date;
    this.description=description;
    this.etat=etat;

this.natureGain=natureGain;
}


validationcontrolling(gain ){
    this.Rest.vadationcontrolling(gain ,this.points).subscribe( res =>{
      console.log("done")
    })
}







}
