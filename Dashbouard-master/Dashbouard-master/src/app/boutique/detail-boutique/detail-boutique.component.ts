import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ServiceBoutiqueService } from '../service-boutique.service';

@Component({
  selector: 'app-detail-boutique',
  templateUrl: './detail-boutique.component.html',
  styleUrls: ['./detail-boutique.component.scss']
})
export class DetailBoutiqueComponent implements OnInit {

  detailBoutiques: any;
  id: any;
  loginData:any
  detail:any;
  photo= environment.photo;
  constructor(
    public service: ServiceBoutiqueService, 
    public route : ActivatedRoute) { }

  ngOnInit(): void {

    this.photo;
    this.loginData=localStorage["isLogin"];
    this.id = this.route.snapshot.params['id'];

    this.service.detailBoutique(this.id).subscribe((data:any)=>{
     this.detailBoutiques= JSON.parse(data);
      console.log(data);
    })
  }
}
