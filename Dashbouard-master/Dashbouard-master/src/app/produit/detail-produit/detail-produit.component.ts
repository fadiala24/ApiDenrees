import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ServiceProduitService } from '../service-produit.service';

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.scss']
})
export class DetailProduitComponent implements OnInit {

  detailProduit: any;
  id: any;
  loginData:any
  photo= environment.photos;
  constructor(
    public service: ServiceProduitService, 
    public route : ActivatedRoute) { }

  ngOnInit(): void {
    this.photo;
    this.loginData=localStorage["isLogin"];
    this.id = this.route.snapshot.params['id'];

    this.service.detailProduit(this.id).subscribe(data=>{
      this.detailProduit =JSON.parse(data);
      console.log(data);
    })
  }

}
