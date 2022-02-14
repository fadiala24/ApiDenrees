import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
  url='http://localhost:8080/api/';

  constructor(
    private http : HttpClient
  ) 
  { }

 //-------------------------------------------------------Produit  APi service --------------

 getAllCategorie():Observable<any>{
  return this.http.get(this.url+"Category/listCategorie");
}
addCategorie(data:any, photo:File):Observable <any>{
  
  const forms: FormData = new FormData();
  forms.append("image", photo)
  console.log("console du service"+ forms);
  
  return this.http.post(this.url+"Category/addCategorie",forms);
}

deleteCategorie(id:any){
  return this.http.delete(this.url+"Category/deleteCategorie/"+id, {responseType:'text'});
}


detailCategorie(id:any){
  return this.http.get(this.url +"Category/infoCategorie/"+id, {responseType:'text'});
}
updateCategorie(id: number, data: any){
  return this.http.put(this.url+"Category/updateCategorie/"+id, data,  {responseType:'text'});
}
}
