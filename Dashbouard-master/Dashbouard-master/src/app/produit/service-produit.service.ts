import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceProduitService {
  url='http://localhost:8080/api/';

  constructor(
    private http : HttpClient
  ) 
  { }

 //-------------------------------------------------------Produit  APi service --------------

 getAllProduit():Observable<any>{
  return this.http.get(this.url+"Produit/listProduit");
}
addProduit(data:any, photo:File):Observable <any>{
  
  const forms: FormData = new FormData();
  forms.append("image", photo)
  console.log("console du service"+ forms);
  
  return this.http.post(this.url+"Produit/addProduit",forms);
}

deleteProduit(id:any){
  return this.http.delete(this.url+"Produit/deleteProduit/"+id, {responseType:'text'});
}


detailProduit(id:any){
  return this.http.get(this.url +"Produit/infoProduit/"+id, {responseType:'text'});
}
updateProduit(id: number, data: any){
  return this.http.put(this.url+"Produit/updateProduit/"+id, data,  {responseType:'text'});
}
}
