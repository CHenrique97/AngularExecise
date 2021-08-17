import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


interface galObject  {
  id : string;
  url: string;
  description:string

}
@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  API="http://localhost:3000"
  constructor(
    private _http:HttpClient
  ) { }

  images(userName: string){
    return this._http.get<galObject>(this.API+"/gallery/"+userName);
  }
}
