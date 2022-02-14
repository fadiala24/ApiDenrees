import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryServiceService } from '../category-service.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  admin: any;
  adminConnect: any;
  services: any;
 
  loginData:any;


  photo: File | any;
  message: any;
  imagePath: any;
  imgURL: any;
  constructor(
    private service: CategoryServiceService,
    private router: Router,
    private toast: ToastrService,
  ) { }

  ngOnInit(): void {
    this.admin =  localStorage.getItem('userData');
    this.adminConnect = JSON.parse(this.admin)
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
      this.services = {'nom': form.value['nom']    
                      }
                        console.log(this.services)
                      
      this.service.addCategorie(this.services, this.photo[0]).subscribe((data: any)=> { 
          let bout = {'nom': form.value['nom'],'photo': this.photo[0].name,
                       
                        }
                        console.log("---BBBBBBBBB---",bout);      
             this.service.updateCategorie(data.id, bout).subscribe((dat: any)=>{
                      this.showToastSuccess();
                      this.router.navigate(["listCategorie"]);
                      console.log("helle ++++++++++++", data);
                     });
      })
    }else{
      this.showToastError();
    }
  }

}