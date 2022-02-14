import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceAdminService } from '../service-admin.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.scss']
})
export class AddAdminComponent implements OnInit {

  admin: any;
  adminConnect: any;
  services: any;

  constructor(
    private service: ServiceAdminService,
    private router: Router,
    private toast: ToastrService
  ) { }
 
  ngOnInit(): void {
    this.admin =  localStorage.getItem('userData');
  this.adminConnect = JSON.parse(this.admin)
}

showToastSuccess() {
  this.toast.success('Admin ajouté avec succès !')
}

showToastError() {
  this.toast.error('Erreur du système !')
}

AjoutService(form: NgForm) {    
  if(form.valid){
    this.services = {'nom': form.value['nom'], 'prenom': form.value['prenom'], 'email': form.value['email'],
     'telephone': form.value['telephone'],'login': form.value['login'], 'password': form.value['password'], 'etat': form.value['etat'],   'administrateur': this.adminConnect}
     console.log(this.services)
    this.service.addAdmin(this.services).subscribe((data: any)=> {
        this.showToastSuccess();
        this.router.navigateByUrl("/listAdmin");
        console.log("helle ++++++++++++", data);
      
      
    })
  }else{
    this.showToastError();
  }
}
    }
