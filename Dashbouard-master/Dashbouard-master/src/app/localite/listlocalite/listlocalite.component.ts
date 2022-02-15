import { Component, Injectable, OnInit } from '@angular/core';
import { ConfirmationDialogService } from 'src/app/confirmation-dialog/confirmation-dialog.service';
import { LocaliteServiceService } from '../localite-service.service';

@Component({
  selector: 'app-listlocalite',
  templateUrl: './listlocalite.component.html',
  styleUrls: ['./listlocalite.component.scss']
})
@Injectable({
  providedIn: 'root',})
export class ListlocaliteComponent implements OnInit {

  searchText= '';
  listeAdmins : any[]=[];
  loginData : any;
  constructor(
    public service: LocaliteServiceService,
    private confirmationDialogService: ConfirmationDialogService
  ) { }

  ngOnInit(): void {
    this.getAllLocalite();
  }

  getAllLocalite(){
    this.listeAdmins=[];
    this.service.getAllLocalite().subscribe((data:any)=> {
      console.log(data);
      this.listeAdmins= data;
    })
    //  this.listeServices=this.service.getAllAdmin();
    console.log("hors boucle====",this.listeAdmins);
  }

  deleteLocalite(id:any):void{
    if(confirm("Voulez-vous supprimer ??")){

      console.log("helooooooo" + id);
     
      this.service.deleteLocalite(id).subscribe((data)=>{
      console.log("helooooooo"); 
      this.getAllLocalite();
    });
  }
   
  }
  public openConfirmationDialog(id:any) {
    this.confirmationDialogService.confirm('Veuillez confirmer ..', 'Voulez-vous supprimer ... ?')
    .then((confirmed) => 

    this.service.deleteLocalite(id).subscribe((data)=>{
      console.log(data); 
      this.getAllLocalite();
    }))
    .catch(
      () => 
      console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }
 }
