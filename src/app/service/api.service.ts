import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlapi = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http:HttpClient) { }

  public getData(pokemon: string):Observable<any>{
    return this.http.get<any>(this.urlapi+pokemon);
  }
}
