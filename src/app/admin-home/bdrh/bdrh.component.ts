
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { DepartementService } from '../../services/departement.service';

import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-bdrh',
  templateUrl: './bdrh.component.html',
  styleUrls: ['./bdrh.component.css']
})
export class BdrhComponent implements OnInit {
  users: any; serviceName: any;
  matricule: any;
  email: any;
  nom: any;
  prenom: any; service: any;
  departements: any;
  closeResult: string;
  idservice: any;
  nomservice: any = [];

  test: boolean; ajout: boolean = true;
  constructor(public Rest: UserService, public dep: DepartementService, private modalService: NgbModal) {
    this.test = false;
    this.getAllUsers();
    //this.departements= this.dep.getdepartement();

    console.log(this.departements)
  }

  ngOnInit() {
  }

  getAllUsers() {

    this.Rest.getusers().subscribe(val => {
      this.users = val;

      this.dep.getdepartement().subscribe(dep => {
        this.departements = dep;

        for (var i = 0; i < this.users.length; i++) {

          for (var j = 0; j < this.departements.length; j++) {
            if (this.users[i].service == this.departements[j].id) {

              this.nomservice.push(this.departements[j].serviceName)


              console.log(this.nomservice)

            }
          }
        }

      })
    });

  }

  removeuser(matricule) {

    this.Rest.removeuser(matricule).subscribe(res => {

      this.getAllUsers();

    }, error2 => {

      //this.getAllUsers();

    });

    this.getAllUsers();


  }


  edit1(matricule, nom, prenom, service, email) {
    this.test = true;

    this.matricule = matricule;
    this.nom = nom;
    this.prenom = prenom;
    this.service = service;
    this.email = email;

  }
  update(matricule, nom, prenom, service, email) {
    this.dep.getdepartement().subscribe(val => {
      this.departements = val;

      for (var i = 0; i < this.departements.length; i++) {
        if (this.departements[i].serviceName == service) {
          this.idservice = this.departements[i].id
        }
      }

      this.Rest.update(matricule, nom, prenom, this.idservice, email).subscribe(res => {
        this.getAllUsers()
      }, error2 => {

        this.getAllUsers();

      });
      this.getAllUsers()

    })





    //this.users = this.Rest.getusers();


    this.test = false;
  }

  add(nom, prenom, service, email) {
    this.Rest.add(nom, prenom, email, service).subscribe()
    this.users = this.Rest.getusers();
  }
  ajoutt() {
    this.ajout = true;
  }


  // open(content) {
  //
  //   this.modalService.open(content).result.then((result) => {
  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  // }
  //
  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return  `with: ${reason}`;
  //   }
  // }
}
