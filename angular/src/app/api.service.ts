import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

const Url = 'https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/armando_maldonado';
const urlG = 'https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/groups/armando_maldonado'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  getEmpleado(): Observable<any> {
    return this.http.get<any>(Url).pipe(
    );
  }

  getGRupos(): Observable<any> {
    return this.http.get<any>(urlG).pipe(
    );
  }


  
}
