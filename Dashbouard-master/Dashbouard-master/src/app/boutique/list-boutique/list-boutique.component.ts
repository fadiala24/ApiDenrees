import { Component, OnInit } from '@angular/core';
import { ConfirmationDialogService } from 'src/app/confirmation-dialog/confirmation-dialog.service';
import { ServiceBoutiqueService } from '../service-boutique.service';

@Component({
  selector: 'app-list-boutique',
  templateUrl: './list-boutique.component.html',
  styleUrls: ['./list-boutique.component.scss']
})
export class ListBoutiqueComponent implements OnInit {

  searchText= '';
  listeBoutiques : any[]=[];
  loginData : any;
  constructor(public service: ServiceBoutiqueService,private confirmationDialogService: ConfirmationDialogService) { }

  ngOnInit(): void {
    this.getAllBoutique();
  }

  getAllBoutique(){
    this.listeBoutiques=[];
    this.service.getAllBoutique().subscribe((data:any)=> {
      console.log(data);
      this.listeBoutiques= data;
    })
    //  this.listeServices=this.service.getAllAdmin();
    console.log("hors boucle====",this.listeBoutiques);
  }

  deleteBoutique(id:any):void{
    if(confirm("Voulez-vous supprimer ??")){

      console.log("helooooooo" + id);
     
      this.service.deleteBoutique(id).subscribe((data)=>{
      console.log("helooooooo"); 
      this.getAllBoutique();
    });
  }
   
  }
  public openConfirmationDialog(id:any) {
    this.confirmationDialogService.confirm('Veuillez confirmer ..', 'Voulez-vous supprimer ... ?')
    .then((confirmed) => 

    this.service.deleteBoutique(id).subscribe((data)=>{
      console.log(data); 
      this.getAllBoutique();
    }))
    .catch(
      () => 
      console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }
}
