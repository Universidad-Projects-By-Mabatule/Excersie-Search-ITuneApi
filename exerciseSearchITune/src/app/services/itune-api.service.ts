import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ITuneApiService {
  //_url_base = 'https://itunes.apple.com/search?term=jack+johnson&limit=5'
  _url_base='https://itunes.apple.com/search?term='
  constructor(private http:HttpClient) { }

  public getResultsITunes(searchtxt:String,mediaQueryP:String){
    let new_url = this._url_base+searchtxt.replace(/ /g, "+")+'&entity='+mediaQueryP+'&limit=20';
    let org_url =  mediaQueryP == 'All'? this._url_base+searchtxt.replace(/ /g, "+"):new_url;
    return this.http.jsonp(
      org_url,
      'callback'
    );
  }

}
