import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceBoutiquierService } from 'src/app/boutiquier/service-boutiquier.service';
import { ServiceBoutiqueService } from '../service-boutique.service';

@Component({
  selector: 'app-update-boutique',
  templateUrl: './update-boutique.component.html',
  styleUrls: ['./update-boutique.component.scss']
})
export class UpdateBoutiqueComponent implements OnInit {


  boutiquier: any;
  boutic: any;
  id: any;
  services: any ={};

  photo: File | any;
  message: any;
  imagePath: any;
  imgURL: any;
  constructor(
    public service: ServiceBoutiqueService,
    public  route: ActivatedRoute,
    public toast: ToastrService,
     public router : Router,
     public serve: ServiceBoutiquierService,
     
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.detailBoutique(this.id).subscribe(data=>{
     // console.log(data);
      this.services = JSON.parse(data);
      console.log(JSON.parse(data));

    })
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
  
  

  onUpdate(){
    this.service.updateBoutique(this.id, this.services).subscribe((res)=> {
      this.showToast();
      console.log(res);
      this.router.navigateByUrl('/listBoutique');
    })
  }
  showToast(){
    this.toast.success("Modification effectuer avec succes !!!");
  }


}
