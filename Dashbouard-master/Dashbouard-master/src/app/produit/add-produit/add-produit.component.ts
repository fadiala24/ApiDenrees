import { AbstractType, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceBoutiqueService } from 'src/app/boutique/service-boutique.service';
import { CategoryServiceService } from 'src/app/Category/category-service.service';
import { ServiceProduitService } from '../service-produit.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.scss']
})
export class AddProduitComponent implements OnInit {
  admin: any;
  adminConnect: any;
  services: any;
  prod:any;
  loginData:any;

  categorie:any;
  boutique:any;
  photo: File | any;
  message: any;
  imagePath: any;
  imgURL: any;
  constructor(
    private service: ServiceProduitService,
    private router: Router,
    private toast: ToastrService,
    private serve: ServiceBoutiqueService,
    private serves: CategoryServiceService
  ) { }
 
  ngOnInit(): void {
    this.admin =  localStorage.getItem('userData');
     this.adminConnect = JSON.parse(this.admin)
     this.afficherBoutique();
     this.afficherCategorie();
    //console.log(JSON.parse(this.boutique));
}

afficherBoutique(){
  this.serve.getAllBoutique().subscribe(
    (data)=>{
      
      this.boutique = data;
      console.log(this.boutique);
    }
  )
}
afficherCategorie(){
  this.serves.getAllCategorie().subscribe(
    (data)=>{
      
      this.categorie = data;
      console.log(this.categorie);
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
  let id : any = {};
  
  if(form.valid){
    this.services = {'nom': form.value['nom'], 'quantite': form.value['quantite'],
                      'prix_unitaire': form.value['prix_unitaire'], 
                      
                      
                    }
                      console.log(this.services)
                    
    this.service.addProduit(this.services, this.photo[0]).subscribe((data: any)=> {

      this.serve.detailBoutique(form.value['boutique']).subscribe((boutique:any)=>{
        //console.log("---boutique---",boutique);
        console.log();
        
        this.serves.detailCategorie(form.value['category']).subscribe((cat:any)=>{
          console.log(cat);
  
        let bout = {'nom': form.value['nom'],  
         'quantite': form.value['quantite'],
                    'prix_unitaire': form.value['prix_unitaire'], 
                    'photo': this.photo[0].name,
                    'category': JSON.parse(cat),
                     'boutiques':JSON.parse(boutique),
                      }
                      console.log("---BBBBBBBBB---",bout);      
           this.service.updateProduit(data.id, bout).subscribe((dat: any)=>{        
                    this.showToastSuccess();
                    this.router.navigate(["listProduit"]);

                    console.log("helle ++++++++++++", data);
                   })
      });
    });
       
      
      
    })
  }else{
    this.showToastError();
  }
}

}
