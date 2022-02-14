import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceBoutiquierService } from '../service-boutiquier.service';

@Component({
  selector: 'app-update-boutiquier',
  templateUrl: './update-boutiquier.component.html',
  styleUrls: ['./update-boutiquier.component.scss']
})
export class UpdateBoutiquierComponent implements OnInit {

  id: any;
  services: any ={};
  constructor(
    public service: ServiceBoutiquierService,
    public  route: ActivatedRoute,
    public toast: ToastrService,
     public router : Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.detailBoutiquier(this.id).subscribe((data)=>{
     // console.log(data);
      this.services = data;
      console.log(data);

    })
  }

  onUpdate(){
    this.service.updateBoutiquier(this.id, this.services).subscribe((res)=> {
      this.showToast();
      console.log(res);
      this.router.navigateByUrl('/listBoutiquier');
    })
  }
  showToast(){
    this.toast.success("Modification effectuer avec succes !!!");
  }

}
