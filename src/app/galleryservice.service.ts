import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export interface Gallery {
  url: string;
  description: string;
}
interface galObject  {
  id: string;
  gallery: Gallery[];

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
