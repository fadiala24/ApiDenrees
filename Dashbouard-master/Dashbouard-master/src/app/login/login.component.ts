import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceloginService } from './servicelogin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
     private service: ServiceloginService,
     private route: Router,
     private toastr: ToastrService,
     ) { }

  ngOnInit(): void {
  }

  showToaster(){
    this.toastr.success("Hello, I'm the toastr message.")
}

  onLogin(loginForm: NgForm) {
    this.service.login(loginForm.value['login'], loginForm.value['password'])
      .subscribe(
        (data:any)=> {
          if (data!=null) {
            localStorage.setItem('userData', JSON.stringify(data))
           this.route.navigateByUrl('accueil');
          }else{
          this.showToaster();
          }
        }
      )
  }

}
