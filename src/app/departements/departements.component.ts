import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Departements } from 'src/models/departements';
import { ApiRegionsService } from 'src/service/api-regions.service';

@Component({
  selector: 'app-departements',
  templateUrl: './departements.component.html',
  styleUrls: ['./departements.component.scss']
})
export class DepartementsComponent implements OnInit {

code:string='';
departementArray: Array<Departements> =[];

  constructor(private apiRegion: ApiRegionsService,
              private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(paramRoute=> {
      this.code = paramRoute['numRegion'];
      console.log(paramRoute['numRegion']);

      this.apiRegion.getDepartements(this.code).subscribe((jsonData)=>{
        this.departementArray=jsonData;
        console.log(this.departementArray);


      });

    })
  }

}


