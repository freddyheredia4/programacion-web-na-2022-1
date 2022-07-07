import { Injectable } from '@angular/core';
import { Person } from './person';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url:string = "http://localhost:8080/api/person";

  constructor(
    private http: HttpClient
  ) { }

    //Create
    public save(person: Person): Observable<Person>{
      return this.http.post<Person>(this.url+"/save", person, this.httpOptions);
    }


}