import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ServiceService } from '../service.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceAdminService {

  url='http://localhost:8080/api/';

  constructor(
    private http : HttpClient
  ) 
  { }

 //-------------------------------------------------------Admin  APi service --------------

 getAllAdmin():Observable<any>{
  return this.http.get(this.url+"Admin/listAdmin");
}
addAdmin(data:any){
    
  return this.http.post(this.url+"Admin/addAdmin",data, {responseType:'text'});
}

deleteAdmin(id:any){
  return this.http.delete(this.url+"Admin/deleteAdmin/"+id,{responseType:'text'});
}


detailAdmin(id:any){
  return this.http.get(this.url +"Admin/infoAdmin/"+id);
}
updateAdmin(id: number, data: any){
  return this.http.put(this.url+"Admin/updateAdmin/"+id, data,  {responseType:'text'});
}

}
