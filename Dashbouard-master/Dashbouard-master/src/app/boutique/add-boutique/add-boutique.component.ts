import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Message } from "primeng/api";
import { ToastrService } from 'ngx-toastr';
import { ServiceBoutiquierService } from 'src/app/boutiquier/service-boutiquier.service';
import { ServiceBoutiqueService } from '../service-boutique.service';

@Component({
  selector: 'app-add-boutique',
  templateUrl: './add-boutique.component.html',
  styleUrls: ['./add-boutique.component.scss']
})
export class AddBoutiqueComponent implements OnInit {
  admin: any;
  adminConnect: any;
  services: any;
  boutiquier: any;
  boutic: any;
  loginData:any;


  photo: File | any;
  message: any;
  imagePath: any;
  imgURL: any;

  constructor(
    private service: ServiceBoutiqueService,
    private router: Router,
    private toast: ToastrService,
    private serve: ServiceBoutiquierService,
  ) { }
 
  ngOnInit(): void {
    this.admin =  localStorage.getItem('userData');
  this.adminConnect = JSON.parse(this.admin)
  this.afficherBoutiquier();
  console.log(this.boutiquier);
  
}



afficherBoutiquier(){
  this.serve.getAllBoutiquier().subscribe(
    (data)=>{
      
      this.boutiquier = data;
      console.log(this.boutiquier);
    }
  )
}

view(files: any) { 
  this.photo = files;
  console.log(files[0].name);

  if (files.length === 0)
    return;

  var mimeType = files[0].type;
  if (mimeType.match(/image\/*/) == null) {
    this.message = "Only images are supported.";
    return;
  }
  var reader = new FileReader();
  this.imagePath = files;
  reader.readAsDataURL(files[0]); 
  reader.onload = (_event) => { 
    this.imgURL = reader.result; 
  }
}


showToastSuccess() {
  this.toast.success('Admin ajouté avec succès !')
}

showToastError() {
  this.toast.error('Erreur du système !')
}

AjoutService(form: NgForm) {
      
  if(form.valid){
    let id : any = {};
    
      this.services = {'nom': form.value['nom'], 'quartier': form.value['quartier'],
                      'ville': form.value['ville'],
                      'adresse': form.value['adresse'],
                      'longitude': form.value['longitude'],
                      'latitude': form.value['latitude'],
                      'administrateur': this.adminConnect}
         console.log(this.services);
         this.service.addBoutique(this.services, this.photo[0]).subscribe((data: any)=> {

          this.serve.detailBoutiquier(form.value['boutiquier']).subscribe((boutiquier:any)=>{
            console.log("---boutiquier---",boutiquier);
            
            let bout = {'nom': form.value['nom'], 'quartier': form.value['quartier'],
                      'ville': form.value['ville'],
                      'adresse': form.value['adresse'],
                      'longitude': form.value['longitude'],
                      'latitude': form.value['latitude'],
                      'boutiquier': boutiquier,
                      'photo': this.photo[0].name}
                      console.log("---BBBBBBBBB---",bout);      
        this.service.updateBoutique(data.id, bout).subscribe((dat: any)=>{
                        
                        this.showToastSuccess();
                        this.router.navigate(["listBoutique"]);
                        console.log("helle ++++++++++++", data);
                       })
          });

           
          
      })
    
  }else{
    this.showToastError();
  }
}




    }