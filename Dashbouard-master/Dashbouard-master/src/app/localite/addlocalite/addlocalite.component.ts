import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocaliteServiceService } from '../localite-service.service';

@Component({
  selector: 'app-addlocalite',
  templateUrl: './addlocalite.component.html',
  styleUrls: ['./addlocalite.component.scss']
})
export class AddlocaliteComponent implements OnInit {
  admin: any;
  adminConnect: any;
  services: any;

  constructor(
    private service: LocaliteServiceService,
    private router: Router,
    private toast: ToastrService
  ) { }
 
  ngOnInit(): void {
    this.admin =  localStorage.getItem('userData');
  this.adminConnect = JSON.parse(this.admin)
}

showToastSuccess() {
  this.toast.success('Localité ajouté avec succès !')
}

showToastError() {
  this.toast.error('Erreur du système !')
}

AjoutService(form: NgForm) {    
  if(form.valid){
    this.services = {'nom': form.value['nom'], 'quartier_id': form.value['quartier_id'],  'etat': form.value['etat'],   'administrateur': this.adminConnect}
     console.log(this.services)
    this.service.addLocalite(this.services).subscribe((data: any)=> {
        this.showToastSuccess();
        this.router.navigateByUrl("/listLocalite");
        console.log("helle ++++++++++++", data);
      
      
    })
  }else{
    this.showToastError();
  }
}
    }
