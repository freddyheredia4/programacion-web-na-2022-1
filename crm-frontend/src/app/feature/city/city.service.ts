import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from './city';


@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(
    private http: HttpClient
  ) { }

  private httpOptions = {
    headers: new HttpHeaders ({"Content-Type":"application/json"})
  }

  private url: string = "http://192.168.1.21:8080/api/city";

  public findAll(): Observable<City[]>{
    return this.http.get<City[]>(this.url+"/findAll", this.httpOptions);
  }

}
