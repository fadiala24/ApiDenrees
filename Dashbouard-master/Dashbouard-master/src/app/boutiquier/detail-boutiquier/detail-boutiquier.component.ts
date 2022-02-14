import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceBoutiquierService } from '../service-boutiquier.service';

@Component({
  selector: 'app-detail-boutiquier',
  templateUrl: './detail-boutiquier.component.html',
  styleUrls: ['./detail-boutiquier.component.scss']
})
export class DetailBoutiquierComponent implements OnInit {

  detailBoutiquier: any;
  id: any;
  loginData:any

  constructor(
    public service: ServiceBoutiquierService, 
    public route : ActivatedRoute) { }

  ngOnInit(): void {

    this.loginData=localStorage["isLogin"];
    this.id = this.route.snapshot.params['id'];

    this.service.detailBoutiquier(this.id).subscribe((data: any)=>{
      console.log(data);
     this.detailBoutiquier=data;
     
    })
  }

}
