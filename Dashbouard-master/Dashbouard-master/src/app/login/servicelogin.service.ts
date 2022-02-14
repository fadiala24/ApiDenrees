import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServiceloginService {
  url='http://localhost:8080/api/';
  constructor(
    private http: HttpClient
    ) { }

  public login(login: string, password: string) {
    return this.http.get(this.url+"Admin/authentificationAdmin/"+login+"&"+password)
  }

  public SetLogin(login: string) {
    localStorage.setItem("login", login)
  }

  public getLogin(){
    return localStorage.getItem("login")
  }

  public SetPassword(password: string) {
    localStorage.setItem("password", password)
  }

  public getPassword(){
    return localStorage.getItem("password")
  }
}
