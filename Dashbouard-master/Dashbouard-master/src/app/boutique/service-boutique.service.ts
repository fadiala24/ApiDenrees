import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceBoutiqueService {

  url='http://localhost:8080/api/';

  constructor(
    private http : HttpClient
  ) 
  { }

 //-------------------------------------------------------Boutique  APi service --------------

 getAllBoutique():Observable<any>{
  return this.http.get(this.url+"Boutique/listBoutique");
}
addBoutique(data:any, photo:File):Observable <any>{
  
  const forms: FormData = new FormData();
  forms.append("image", photo)
  return this.http.post(this.url+"Boutique/addBoutique",forms);
}

deleteBoutique(id:any){
  return this.http.delete(this.url+"Boutique/deleteBoutique/"+id,{responseType:'text'});
}


detailBoutique(id:any){
  return this.http.get(this.url +"Boutique/infoBoutique/"+id,{responseType:'text'});
}
updateBoutique(id: number, data: any){
  return this.http.put(this.url+"Boutique/updateBoutique/"+id,data,{responseType:'text'});
}

}


