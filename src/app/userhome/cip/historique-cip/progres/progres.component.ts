import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../../services/user.service';
import {CipService} from '../../../../services/cip.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-progres',
  templateUrl: './progres.component.html',
  styleUrls: ['./progres.component.css']
})
export class ProgresComponent implements OnInit {
  statuts:any;
numero: any ;
controlling1:any;
controlling : any ;
  test:boolean;
  mat:any ;
  ctr:any ;
  nomcontrolling :any ;
  prenomcontrolling: any ;
  constructor(public restuser: UserService, public  restcip :CipService , public route : ActivatedRoute) {
 this.numero = this.route.snapshot.params['numero']
    this.controlling1= this.route.snapshot.params['controlling']

    this.getUserByStatut("controlling");


 this.restcip.getcontrolling(this.controlling1).subscribe( val => {
   console.log(JSON.parse(JSON.stringify(val)).nom)

   this.ctr= val ;

   console.log(this.ctr)

this.nomcontrolling=JSON.parse(JSON.stringify(val)).nom;
this.prenomcontrolling=JSON.parse(JSON.stringify(val)).prenom;


 })



  }

  getUserByStatut(statut){
    this.restuser.getUserByStatut(statut).subscribe(res => {
      this.statuts = res;
    });
  }

   updateContolling(controlling) {
    console.log(this.numero)
    console.log(controlling)
     this.restcip.updateControlling(this.numero,controlling).subscribe( val=>{
       console.log("ok")

       this.controlling1= controlling ;

       this.restcip.getcontrolling(this.controlling1).subscribe( val => {
         console.log(JSON.parse(JSON.stringify(val)).nom)

         this.ctr= val ;

         console.log(this.ctr)

         this.nomcontrolling=JSON.parse(JSON.stringify(val)).nom;
         this.prenomcontrolling=JSON.parse(JSON.stringify(val)).prenom;

console.log(this.nomcontrolling)
console.log(this.prenomcontrolling)
       })


     })



   }
  edit1(numero,controlling)
  {
   this.numero=numero;
   this.controlling=controlling;
  }

  ngOnInit() {
  }

  getmatricule(controlling){

    this.mat=controlling.matricule

  }



}
