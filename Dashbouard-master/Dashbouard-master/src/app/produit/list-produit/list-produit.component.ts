import { Component, OnInit } from '@angular/core';
import { ConfirmationDialogService } from 'src/app/confirmation-dialog/confirmation-dialog.service';
import { ServiceProduitService } from '../service-produit.service';

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.scss']
})
export class ListProduitComponent implements OnInit {
  searchText= '';
  listeProduit : any[]=[];
  loginData : any;
  constructor(
    public service: ServiceProduitService,private confirmationDialogService: ConfirmationDialogService
  ) { }

  ngOnInit(): void {
    this.getAllProduit();
  }

  getAllProduit(){
    this.listeProduit=[];
    this.service.getAllProduit().subscribe((data:any)=> {
      console.log(data);
      this.listeProduit= data;
    })
    //  this.listeServices=this.service.getAllAdmin();
    console.log("hors boucle====",this.listeProduit);
  }

  deleteProduit(id:any):void{
    if(confirm("Voulez-vous supprimer ??")){

      console.log("helooooooo" + id);
     
      this.service.deleteProduit(id).subscribe((data)=>{
      console.log("helooooooo"); 
      this.getAllProduit();
    });
  }
   
  }
  public openConfirmationDialog(id:any) {
    this.confirmationDialogService.confirm('Veuillez confirmer ..', 'Voulez-vous supprimer ... ?')
    .then((confirmed) => 

    this.service.deleteProduit(id).subscribe((data)=>{
      console.log(data); 
      this.getAllProduit();
    }))
    .catch(
      () => 
      console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }
}
