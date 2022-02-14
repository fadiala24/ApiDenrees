import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAdminService } from '../service-admin.service';
import * as XLSX from 'xlsx';
import { ConfirmationDialogService } from 'src/app/confirmation-dialog/confirmation-dialog.service';


@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.scss']
})
@Injectable({
  providedIn: 'root',})
export class ListAdminComponent implements OnInit {
  searchText= '';
  listeAdmins : any[]=[];
  loginData : any;
  constructor(
    public service: ServiceAdminService,private confirmationDialogService: ConfirmationDialogService
  ) { }

  ngOnInit(): void {
    this.getAllAdmin();
  }

  getAllAdmin(){
    this.listeAdmins=[];
    this.service.getAllAdmin().subscribe((data:any)=> {
      console.log(data);
      this.listeAdmins= data;
    })
    //  this.listeServices=this.service.getAllAdmin();
    console.log("hors boucle====",this.listeAdmins);
  }

  deleteAdmin(id:any):void{
    if(confirm("Voulez-vous supprimer ??")){

      console.log("helooooooo" + id);
     
      this.service.deleteAdmin(id).subscribe((data)=>{
      console.log("helooooooo"); 
      this.getAllAdmin();
    });
  }
   
  }
  public openConfirmationDialog(id:any) {
    this.confirmationDialogService.confirm('Veuillez confirmer ..', 'Voulez-vous supprimer ... ?')
    .then((confirmed) => 

    this.service.deleteAdmin(id).subscribe((data)=>{
      console.log(data); 
      this.getAllAdmin();
    }))
    .catch(
      () => 
      console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }
 }
