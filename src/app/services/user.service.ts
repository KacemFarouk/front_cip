
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserService {


  baseURL: any="http://localhost/cip";

  constructor(public http: HttpClient) {


  }


  getusers(){

    return this.http.get(this.baseURL+"/getAlluser.php");
  }


  getUserByStatut(statut){
    return this.http.get(this.baseURL+"/getUserByStatut.php?statut="+statut);
  }

  getUserByMatricule(matricule){

    return this.http.get(this.baseURL+"/getUserByMatricule.php?matricule="+matricule);
  }

  removeuser(matricule){
    return this.http.get(this.baseURL+"/removeuser.php?matricule="+matricule);
}

update(matricule ,nom , prenom ,departement, email){
    return this.http.get(this.baseURL+"/updateuser.php?matricule=" + matricule + "&nom="+nom +"&prenom="+prenom+"&departement=" +departement+ "&email=" +email  )
}

  add(nom,prenom,departement,email){
    return this.http.get(this.baseURL+"/adduser.php?nom=" + nom +"&prenom="+prenom+"&departement="+departement+"&email=" +email )
  }

  getPoints(matricule){

    return this.http.get(this.baseURL+"/getPoints.php?matricule=22");
  }
}

