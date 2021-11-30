import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { map, Observable } from "rxjs";
import { environment } from 'src/environments/environment';
import { Pet } from "../Pet";

@Injectable({
  providedIn: 'root'
})


export class PetService {

  private _petsUrl : string

  constructor(private http: HttpClient) {
    this._petsUrl = `${environment.backendUrl}/pets`;
  }
  

  
  getPets(): Observable<any> {
    return this.http.get<Pet[]>(this._petsUrl)
    .pipe(map(Response=> Response.sort((a: Pet, b: Pet)=>a.name.localeCompare(b.name)))); //  this is sort by the name using pip and map and sort with localcompare
  }


  addPet(pet: Pet){
return this.http.post(this._petsUrl,pet);
  }

  findPetByName(name: string) : Observable<any>{
    return this.http.get(`${this._petsUrl}/${name}`);

  }

  // sendMessage(name: string) {
  //   return this.http.post(`${this._petsUrl}/sendText`, name);
  // }
}
