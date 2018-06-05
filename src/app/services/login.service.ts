import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {
  baseURL: any = "http://localhost/cip";

  constructor(public http: HttpClient) { }
  login(email, password) {
    return this.http.get(this.baseURL + "/login.php?email=" + email + "&password=" + password);

  }
}
