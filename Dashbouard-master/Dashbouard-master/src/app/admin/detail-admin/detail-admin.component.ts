import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceAdminService } from '../service-admin.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detail-admin',
  templateUrl: './detail-admin.component.html',
  styleUrls: ['./detail-admin.component.scss']
})
export class DetailAdminComponent implements OnInit {

  detailAdmin: any;
  id: any;
  loginData:any
  constructor(
    public service: ServiceAdminService, 
    public route : ActivatedRoute) { }

  ngOnInit(): void {
    this.loginData=localStorage["isLogin"];
    this.id = this.route.snapshot.params['id'];
    this.service.detailAdmin(this.id).subscribe(data=>{
      console.log(data);
      this.detailAdmin = data;
      
    })
  }

}
