import {Component, OnInit} from '@angular/core';
import {GainService} from '../../../services/gain.service';
import {UserService} from '../../../services/user.service';
import {DepartementService} from '../../../services/departement.service';
import {nextTick} from 'q';
import {CipService} from '../../../services/cip.service';

@Component({
  selector: 'app-new-cip',
  templateUrl: './new-cip.component.html',
  styleUrls: ['./new-cip.component.css']
})
export class NewCipComponent implements OnInit {
  matricule: any;
  description: any;
  nature: any;
  nom: any;
  prenom: any;
  gains: any;
  users: any;
  idnature: any;
  cpt: any;
  departement: any;
  users1: any = [] = [];
  users11: any = [] = [];
service:any;
  poste: any;
  prime1:number=0;
  prime2:number=0;
  prime3:number=0;
  prime4:number=0;
  prime:number=0;
  points:number=0;
gain:any;
  constructor(public rest: GainService, public restuser: UserService, public dep: DepartementService, public cip: CipService) {
    //this.getAllUsers(this.matricule);


    this.getAllGains();
  }

  ngOnInit() {
  }

  getAllGains() {

    this.rest.get().subscribe(res => {
      this.gains = res;
    });
  }

  // get(){
  //
  //   this.restdepartement.get().subscribe( restt=>{
  //     this.departements=restt ;
  //   });
  // }


  getAllUsers(matricule) {

    console.log(matricule);

    this.restuser.getUserByMatricule(matricule).subscribe(res => {

      console.log('res', res);


             console.log("res ",JSON.parse(JSON.stringify(res)).service)
         this.getServiceById(JSON.parse(JSON.stringify(res)).service);

      this.users1.push(res);

      this.matricule="";
    });

  }

  getServiceById(id)
  {

    this.dep.getServiceById(id).subscribe(res => {

      console.log('res', res);
      this.users11.push(JSON.parse(JSON.stringify(res)).serviceName);

    });
  }
  getidnature(nature) {

    this.idnature = nature.id;
    }


  addcip( description, natureGain) {


      this.cip.addcip( description, natureGain).subscribe(res => {
console.log('done')

        console.log(res)
          for(var i=0 ; i<this.users1.length ; i++) {
            this.cip.addcipuser(this.cip['numero'], this.users1[i].matricule).subscribe(res => { console.log("done")})
          }
        console.log('done');
      });



    console.log(natureGain);

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


