import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceBoutiquierService {

  url='http://localhost:8080/api/';

  constructor(
    private http : HttpClient
  ) 
  { }

 //-------------------------------------------------------Boutiquier  APi service --------------

 getAllBoutiquier():Observable<any>{
  return this.http.get(this.url+"Boutiquier/listBoutiquier");
}
addBoutiquier(data:any){
    
  return this.http.post(this.url+"Boutiquier/addBoutiquier",data, {responseType:'text'});
}

deleteBoutiquier(id:any){
  return this.http.delete(this.url+"Boutiquier/deleteBoutiquier/"+id,{responseType:'text'});
}


detailBoutiquier(id:any){
  return this.http.get(this.url +"Boutiquier/infoBoutiquier/"+id);
}
updateBoutiquier(id: number, data: any){
  return this.http.put(this.url+"Boutiquier/updateBoutiquier/"+id,data,{responseType:'text'});
}

}
