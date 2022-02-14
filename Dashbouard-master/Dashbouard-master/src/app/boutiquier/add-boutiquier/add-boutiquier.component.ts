import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceBoutiquierService } from '../service-boutiquier.service';

@Component({
  selector: 'app-add-boutiquier',
  templateUrl: './add-boutiquier.component.html',
  styleUrls: ['./add-boutiquier.component.scss']
})
export class AddBoutiquierComponent implements OnInit {

  showMsg: boolean = false;
  admin: any;
  adminConnect: any;
  services: any;
  constructor(
    private service: ServiceBoutiquierService,
    private router: Router,
    private toast: ToastrService
  ) { }
 
  ngOnInit(): void {
    this.admin =  localStorage.getItem('userData');
  this.adminConnect = JSON.parse(this.admin)
}

showToastSuccess() {
  this.toast.success('Boutiquier ajouté avec succès !')
}

showToastError() {
  this.toast.error('Erreur du système !')
}

AjoutService(form: NgForm) {    
  if(form.valid){
    this.services = {'nom': form.value['nom'], 'prenom': form.value['prenom'], 'password': form.value['password'], 'login': form.value['login'],
     'telephone': form.value['telephone'], 'administrateur': this.adminConnect}
     console.log(this.services)
    this.service.addBoutiquier(this.services).subscribe((data: any)=> {
        this.showToastSuccess();
        this.showMsg= true;
        this.router.navigateByUrl("/listBoutiquier");
        console.log("helle ++++++++++++", data);
      
      
    })
  }else{
    this.showToastError();
  }
}

}
