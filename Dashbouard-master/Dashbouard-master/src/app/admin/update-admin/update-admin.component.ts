import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceAdminService } from '../service-admin.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.scss']
})
export class UpdateAdminComponent implements OnInit {

  id: any;
  services: any;
  constructor(
    public service: ServiceAdminService,
    public  route: ActivatedRoute,
    public toast: ToastrService,
     public router : Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.detailAdmin(this.id).subscribe(data=>{
      console.log(data);
      this.services = data;

    })
  }

  onUpdate(){
    this.service.updateAdmin(this.id, this.services).subscribe((res)=> {
      this.showToast();
      console.log(res);
      this.router.navigateByUrl('/listAdmin');
    })
  }
  showToast(){
    this.toast.success("Modification effectuer avec succes !!!");
  }

}
