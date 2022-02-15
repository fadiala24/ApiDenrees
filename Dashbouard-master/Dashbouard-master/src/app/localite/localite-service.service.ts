import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocaliteServiceService {
  url='http://localhost:8080/api/';

  constructor(
    private http : HttpClient
  ) 
  { }

 //-------------------------------------------------------Localite  APi service --------------

 getAllLocalite():Observable<any>{
  return this.http.get(this.url+"Localite/listLocalite");
}
addLocalite(data:any){
    
  return this.http.post(this.url+"Localite/addLocalite",data, {responseType:'text'});
}

deleteLocalite(id:any){
  return this.http.delete(this.url+"Localite/deleteLocalite/"+id,{responseType:'text'});
}


detailAdmin(id:any){
  return this.http.get(this.url +"Localite/infoLocalite/"+id);
}
updateAdmin(id: number, data: any){
  return this.http.put(this.url+"Localite/updateLocalite/"+id, data,  {responseType:'text'});
}

}
