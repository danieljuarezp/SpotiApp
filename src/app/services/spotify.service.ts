import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class SpotifyService {

  artistas:any[]=[];
  urlBusqueda:string = "https://api.spotify.com/v1/search";

  constructor(private http:Http) { }

  getArtistas(termino:string){
    let headers = new Headers();

    headers.append('authorization','Bearer BQCoLX_v3QASCm_WWxkSdy_ggD4fY_PV8HNFd0I1-kfLM_JvL4_ugrGcElwzzGS2TgsNQ1OaB-kuFge9DDVNbQ');

    let query = `?q=${termino}&type=artist`
    let url = this.urlBusqueda+query;

    return this.http.get(url,{headers}).map(res =>{
      console.log(res);
    })
  }

}
