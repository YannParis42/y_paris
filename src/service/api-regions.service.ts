import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Communes } from 'src/models/communes';
import { Departements } from 'src/models/departements';
import { Regions } from 'src/models/regions';

@Injectable({
  providedIn: 'root'
})
export class ApiRegionsService {


  rawUrl: string='https://geo.api.gouv.fr';
  regionsUrl:string='/regions';
  departementsUrl: string='/departements';

  constructor(private httpClient: HttpClient) { }

  getRegions():Observable<Array<Regions>>{
    return this.httpClient.get<Array<Regions>>(this.rawUrl+this.regionsUrl)
  }

  getDepartements(regionCode:string):Observable<Array<Departements>>{
    return this.httpClient.get<Array<Departements>>(this.rawUrl+this.regionsUrl+'/'+regionCode+this.departementsUrl)
  }

  getCommunes(departementCode:string):Observable<Array<Communes>>{
    return this.httpClient.get<Array<Communes>>(this.rawUrl+this.departementsUrl+'/'+departementCode+'/communes')
  }

}



