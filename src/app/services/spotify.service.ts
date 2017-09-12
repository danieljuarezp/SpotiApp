import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class SpotifyService {

  artistas:any[]=[];

  urlBusqueda:string = "https://api.spotify.com/v1/search";
  urlArtista:string = "https://api.spotify.com/v1/artists";

  constructor(private http:Http) { }

  getArtistas(termino:string){
    let headers = new Headers();

    headers.append('authorization','Bearer BQCVdZutHQfWc6W8jjeERbH4t9vFTZ6VdE8154dfrxTOleOD7pKpZZ_zhpjSEUHatE80zzJGo3KpIaCORmJpHg');

    let query = `?q=${termino}&type=artist`;
    let url = this.urlBusqueda+query;

    return this.http.get(url,{headers}).map(res =>{
      //console.log(res.json());
      this.artistas=res.json().artists.items;
      //console.log(this.artistas);
    })
  }

}
