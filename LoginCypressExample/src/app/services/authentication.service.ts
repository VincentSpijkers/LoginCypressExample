import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Login} from "../models/login";
import {Response} from "../models/response";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private API_URL = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router, private toastr : ToastrService) { }

  public testErrorMessage(someCode : string) : string {
    return "Some error";
  }

  public login(username: string, password: string) : void {
    const credentials : Login = {username: username, password: password};

    this.http.post<Response>(this.API_URL + "/login", credentials).subscribe(data =>{
      if (data.response == "ACCEPTED"){
        this.router.navigate(['/home'])
        this.toastr.success('Login succesvol',);
      }else {
        this.toastr.error("Er ging iets mis..")
      }
    })
  }
}
