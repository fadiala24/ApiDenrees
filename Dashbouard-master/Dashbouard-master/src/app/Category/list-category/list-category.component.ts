import { Component, OnInit } from '@angular/core';
import { ConfirmationDialogService } from 'src/app/confirmation-dialog/confirmation-dialog.service';
import { CategoryServiceService } from '../category-service.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss']
})
export class ListCategoryComponent implements OnInit {

  searchText= '';
  listeProduit : any[]=[];
  loginData : any;
  constructor(public service: CategoryServiceService,
    private confirmationDialogService: ConfirmationDialogService) { }
  ngOnInit(): void {
    this.getAllCategorie();
  }

  getAllCategorie(){
      this.listeProduit=[];
      this.service.getAllCategorie().subscribe((data:any)=> {
        console.log(data);
        this.listeProduit= data;
      })
      //  this.listeServices=this.service.getAllAdmin();
      console.log("hors boucle====",this.listeProduit);
    }
  
    deleteCategorie(id:any):void{
      if(confirm("Voulez-vous supprimer ??")){
  
        console.log("helooooooo" + id);
       
        this.service.deleteCategorie(id).subscribe((data)=>{
        console.log("helooooooo"); 
        this.getAllCategorie();
      });
    }
     
    }
    public openConfirmationDialog(id:any) {
      this.confirmationDialogService.confirm('Veuillez confirmer ..', 'Voulez-vous supprimer ... ?')
      .then((confirmed) => 
  
      this.service.deleteCategorie(id).subscribe((data)=>{
        console.log(data); 
        this.getAllCategorie();
      }))
      .catch(
        () => 
        console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
    }

}
