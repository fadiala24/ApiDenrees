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
   // this.toastr.success("Hello, I'm the toastr message.")
    this.toastr.success('We do have the Kapua suite available.', 'Turtle Bay Resort', {positionClass: 'toast-top-center'});
}

showSuccessWithTimeout(message: string | undefined, title: string | undefined, timespan: any){ 

var options = {
  "closeButton": true,
  "debug": false,
  "positionClass": "toast-top-full-width",
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "300000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
};
  this.toastr.success(message, title ,{ 
  timeOut : timespan,
  positionClass: 'toast-top-full-width' 
   }) 
  
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
