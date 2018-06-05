

import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {HttpClient} from '@angular/common/http';
import {DepartementService} from '../services/departement.service';
import {LoginService} from '../services/login.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  password:any;
  users: any ; serviceName:any;
  matricule: any;
  email : any ;
  nom  :any ;
  prenom  :any ;service : any ;
  deppartements : any ;
  test:boolean;
  ajout :boolean =true;
  
  constructor(public Rest: UserService ,  public dep  : DepartementService,public log :LoginService , public router : Router) {
    this.test=false ;
    this.getAllUsers();
    this.deppartements= this.dep.getdepartement();
  }

  ngOnInit() {
  }

  getAllUsers() {

    this.users = this.Rest.getusers();

    console.log(this.users)
  }

  removeuser(matricule) {

    this.Rest.removeuser(matricule).subscribe(res => {
      console.log(matricule)


      this.users = this.Rest.getusers();

    });

    // location.reload();
  }
  remove(matricule){

    this.matricule = matricule ;
    console.log(this.matricule )
  }

  edit1(matricule ,nom , prenom , service, email )
  {
    this.test=true ;

    this.matricule = matricule ;
    this.nom = nom ;
    this.prenom = prenom;
    this.service= service;
    this.email= email ;

  }
  update(matricule ,nom , prenom , service, email)
  {
    this.Rest.update(matricule ,nom , prenom , service, email).subscribe()
    this.users = this.Rest.getusers();
  }

  add (nom,prenom,service , email )
  {
    this.Rest.add(nom,prenom,email,service).subscribe()
    this.users = this.Rest.getusers();
  }
  ajoutt (){
    this.ajout = true ;
  }

login(email,password)
{
  this.log.login(email,password).subscribe(value => {console.log(JSON.parse(JSON.stringify(value)).statut)
      localStorage.setItem('nom' , JSON.parse(JSON.stringify(value)).nom )
      localStorage.setItem('prenom' , JSON.parse(JSON.stringify(value)).prenom )
  if(JSON.parse(JSON.stringify(value)).statut == "admin" ) {

this.router.navigate(["/adminhome"])

  }
      if(JSON.parse(JSON.stringify(value)).statut == "controlling" || JSON.parse(JSON.stringify(value)).statut == "SMRT" || JSON.parse(JSON.stringify(value)).statut == "head of controlling" || JSON.parse(JSON.stringify(value)).statut == "directeur financiere" )  {
         localStorage.setItem('matricule' , JSON.parse(JSON.stringify(value)).matricule )
         localStorage.setItem('service' , JSON.parse(JSON.stringify(value)).service )
        localStorage.setItem('statut' , JSON.parse(JSON.stringify(value)).statut )

        this.router.navigate(["/validhome"])

      }
      if(JSON.parse(JSON.stringify(value)).statut == "user" ) {
        localStorage.setItem('matriculeuser' , JSON.parse(JSON.stringify(value)).matricule )


        localStorage.setItem('pointsuser' , JSON.parse(JSON.stringify(value)).points )
        this.router.navigate(["/userhome"])

      }


  }
  )

}


}
