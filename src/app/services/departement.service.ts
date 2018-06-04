
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DepartementService{


  baseURL: any="http://localhost/server";

  constructor(public http: HttpClient) {


  }
  getdepartement(){

    return this.http.get(this.baseURL+"/getAlldepartements.php");
  }
  getServiceById(id){

    return this.http.get(this.baseURL+"/getServiceById.php?id="+id);
  }
}


