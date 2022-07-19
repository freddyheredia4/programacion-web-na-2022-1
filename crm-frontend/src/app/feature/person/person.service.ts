import { Injectable } from '@angular/core';
import { Person } from './person';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url:string = environment.API_URL +  "/person";

  constructor(
    private http: HttpClient
  ) { }

    //Create
    public save(person: Person): Observable<Person>{
      return this.http.post<Person>(this.url+"/save", person, this.httpOptions);
    }

    //Read
    public findById(id: number): Observable<Person>{
      return this.http.get<Person>(this.url+"/"+id, this.httpOptions);
    }

    public deleteById(id: number): Observable<void>{
      console.log(id);
      return this.http.delete<void>(this.url+"/delete/"+id, this.httpOptions);
    }

    public findAll():Observable<Person[]>{
      return this.http.get<Person[]>(this.url+"/findAll", this.httpOptions);
    }

    public findByName(term: string): Observable<Person[]> {
      return this.http.get<Person[]>(this.url+"/findByName/"+term, this.httpOptions);
    }


}
