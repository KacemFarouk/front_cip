import { Component, OnInit } from '@angular/core';
import {CipService} from '../../services/cip.service';

@Component({
  selector: 'app-cip1',
  templateUrl: './cip1.component.html',
  styleUrls: ['./cip1.component.css']
})




export class Cip1Component implements OnInit {
prime1:number=0;
prime2:number=0;
prime3:number=0;
prime4:number=0;
prime:number=0;
  cips:any;
  matricule:any ;
  service : any ;
  statut: any ;
  gain : any ;
  points:number=0;
  numero:any;collaborateurs:any;date:any;description:any;etat:any;natureGain:any;
  constructor(public Rest:CipService) {


    this.getallcip();
  }

  ngOnInit() {
  }


getallcip(){
    this.cips=this.Rest.getAllCip();
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


  validation(gain ){
    this.Rest.vadationcontrolling(gain ,this.points).subscribe( res =>{
      console.log("done")
    })
  }


  choixoui(gain){
    this.prime=0 ;
this.prime1 = (gain * 0.5)/100;
    if(this.prime1 > 100 ){
      this.prime1 = 100
    }
this.prime=this.prime1;
  }

choixnon(gain){
this.prime=0 ;
    this.prime1 = (gain * 3)/100;
  if(this.prime1 > 600 ){
    this.prime1 = 600
  }
this.prime=this.prime1 ;

}


  choixgain(gain){
this.prime=this.prime1;
    this.prime2 = (gain * 3)/100;
    if(this.prime2 > 600 ){
      this.prime2 = 600
    }
this.prime=this.prime+this.prime2
  }

  choixsaving(gain){
this.prime=this.prime1 ;
    this.prime2 = (gain * 1.5)/100;
    if(this.prime2 > 300 ){
      this.prime2 = 300
    }
    this.prime=this.prime+this.prime2

  }


  choixoui3(gain){
    this.prime=this.prime1+this.prime2 ;
    this.prime3 = (gain * 2)/100;
    if(this.prime3 > 200 ){
      this.prime3 = 200
    }
    this.prime=this.prime+this.prime3

  }

  choixnon3(gain){
    this.prime=this.prime1+this.prime2 ;

    this.prime3 = 0 ;

    this.prime=this.prime+this.prime3


  }



  choixoui4(gain){
    this.prime=this.prime1+this.prime2+this.prime3 ;
    this.prime4 = (gain * 2)/100;
    if(this.prime4 > 200 ){
      this.prime4 = 200
    }
    this.prime=this.prime+this.prime4
    this.points=(this.prime*100)/30
  }

  choixnon4(gain){
    this.prime=this.prime1+this.prime2 + this.prime3 ;
    this.prime4 = 0 ;


    this.prime=this.prime+this.prime4
    this.points=(this.prime*100)/30
  }






}

