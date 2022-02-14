import { Component, OnInit } from '@angular/core';
import { ConfirmationDialogService } from 'src/app/confirmation-dialog/confirmation-dialog.service';
import { ServiceBoutiquierService } from '../service-boutiquier.service';

@Component({
  selector: 'app-list-boutiquier',
  templateUrl: './list-boutiquier.component.html',
  styleUrls: ['./list-boutiquier.component.scss']
})
export class ListBoutiquierComponent implements OnInit {

  searchText= '';
  listeBoutiquier : any[]=[];
  loginData : any;
  constructor(public service: ServiceBoutiquierService,private confirmationDialogService: ConfirmationDialogService) { }

  ngOnInit(): void {
    this.getAllBoutiquier();
  }

  getAllBoutiquier(){
    this.listeBoutiquier=[];
    this.service.getAllBoutiquier().subscribe((data:any)=> {
      console.log(data);
      this.listeBoutiquier= data;
    })
    //  this.listeServices=this.service.getAllAdmin();
    console.log("hors boucle====",this.listeBoutiquier);
  }

  deleteBoutique(id:any):void{
    if(confirm("Voulez-vous supprimer ??")){

      console.log("helooooooo" + id);
     
      this.service.deleteBoutiquier(id).subscribe((data)=>{
      console.log("helooooooo"); 
      this.getAllBoutiquier();
    });
  }
   
  }
  public openConfirmationDialog(id:any) {
    this.confirmationDialogService.confirm('Veuillez confirmer ..', 'Voulez-vous supprimer ... ?')
    .then((confirmed) => 

    this.service.deleteBoutiquier(id).subscribe((data)=>{
      console.log(data); 
      this.getAllBoutiquier();
    }))
    .catch(
      () => 
      console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

}
