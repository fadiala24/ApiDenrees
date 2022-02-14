import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CategoryServiceService } from '../category-service.service';

@Component({
  selector: 'app-detail-category',
  templateUrl: './detail-category.component.html',
  styleUrls: ['./detail-category.component.scss']
})
export class DetailCategoryComponent implements OnInit {

  detailCategorie: any;
  id: any;
  loginData:any;
  photo= environment.Categorie;
  constructor( public service: CategoryServiceService, 
    public route : ActivatedRoute) { }

  ngOnInit(): void {
    this.photo;
    this.loginData=localStorage["isLogin"];
    this.id = this.route.snapshot.params['id'];

    this.service.detailCategorie(this.id).subscribe(data=>{
      this.detailCategorie =JSON.parse(data);
      console.log(data);
    })
  }

}
