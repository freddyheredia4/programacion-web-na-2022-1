import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Authority } from './authority';

@Injectable({
  providedIn: 'root'
})
export class AuthorityService {

  constructor(
    private http: HttpClient
  ) { }

  private httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  }

  private url = "http://192.168.1.21:8080/api/authority";

  public findById(id: number): Observable<Authority> {
    return this.http.get<Authority>(this.url + "/" + id, this.httpOptions);
  }

  public findByName(term: string): Observable<Authority[]> {
    return this.http.get<Authority[]>(this.url + "/findByName/" + term, this.httpOptions);
  }

  //Create
  public save(authority: Authority): Observable<Authority> {
    return this.http.post<Authority>(this.url + "/save", authority, this.httpOptions);
  }

  public findAll(): Observable<Authority[]> {
    return this.http.get<Authority[]>(this.url + "/findAll", this.httpOptions);
  }

}
