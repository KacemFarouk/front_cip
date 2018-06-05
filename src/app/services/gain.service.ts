/*
import { Injectable } from '@angular/core';

@Injectable()
export class GainService {

  constructor() { }

}
*/
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class GainService {


  baseURL: any="http://localhost/cip";

  constructor(public http: HttpClient) {


  }



get(){
    return this.http.get(this.baseURL+"/getAllgain.php");
}
}

