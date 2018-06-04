import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CipService {


     baseURL: any="http://localhost/server";

  constructor(public http: HttpClient) {


  }


  getAllCip(){

      return this.http.get(this.baseURL+"/getAllcip.php");
  }

  removecip(numero){
    return this.http.get(this.baseURL+"/removecip.php?numero="+numero);
  }
  update(numero,description, natureGain){
    return this.http.get(this.baseURL+"/updatecip.php?numero="+numero+"&description"+description+"&natureGain="+natureGain)
  }
  addcip(description,natureGain){

    return this.http.get(this.baseURL+"/addcip.php?description="+description+"&natureGain="+natureGain)

  }


  updateValeurGainPointsPrime(numero,points,prime, valeurGain){
    return this.http.get(this.baseURL+"/updateValeurGainPointsPrime.php?valeurGain="+valeurGain+"&points="+points+"&prime="+prime+"&numero="+numero)
  }

  updateControlling(numero,controlling){
    return this.http.get(this.baseURL+"/updateControlling.php?numero="+numero+"&controlling="+controlling)
 }
getcontrolling(matricule){

    return this.http.get("http://localhost/server/getUserByMatricule.php?matricule="+matricule)

}


getcipcontrolling(matricule){
    return this.http.get("http://localhost/server/getCipByControllingAndEtat.php?controlling="+matricule+"&etat=encours")
}


getcipheadofcontrolling( ){
    return this.http.get("http://localhost/server/getCipByValeurGainAndEtat.php?valeurGain=500&etat=valid2")
}


  getcipdirecteur( ){
    return this.http.get("http://localhost/server/getCipByValeurGainAndEtat.php?valeurGain=1000&etat=valid2")
  }

vadationcontrolling(gain, point){

    return this.http.get("http://localhost/server/updateValeurGain.php?valeurGain=4448&points="+point+"&numero="+gain)
}

getCipByMatricule(matricule){
  return this.http.get("http://localhost/server/getCipByMatricule.php?matricule="+matricule)

}

addcipuser(numero , iduser){
    return this.http.get("http://localhost/server/addUserInCip.php?numcip="+numero+"&iduser="+iduser)
}


}
