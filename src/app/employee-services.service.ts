import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';

@Injectable()
export class EmployeeServicesService {


  private _url: string="https://jsonplaceholder.typicode.com/todos";

  constructor(private http:HttpClient) { }

   getEmployeeDetails():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url);
  }

 

}