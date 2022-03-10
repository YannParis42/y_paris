import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Regions } from 'src/models/regions';

@Injectable({
  providedIn: 'root'
})
export class ApiRegionsService {

  rawUrl: string='https://geo.api.gouv.fr';
  regionsUrl:string='/regions';

  constructor(private httpClient: HttpClient) { }

  getRegions():Observable<Array<Regions>>{
    return this.httpClient.get<Array<Regions>>(this.rawUrl+this.regionsUrl)
  }

}



