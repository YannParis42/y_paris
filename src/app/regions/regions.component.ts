import { Component, OnInit } from '@angular/core';
import { Regions } from 'src/models/regions';
import { ApiRegionsService } from 'src/service/api-regions.service';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss']
})
export class RegionsComponent implements OnInit {

  regionsArray: Array<Regions> = [];

  constructor(private apiRegions: ApiRegionsService) { }

  ngOnInit(): void {

this.apiRegions.getRegions().subscribe((jsonData)=>{
  this.regionsArray = jsonData;
  console.log(this.regionsArray);

});

  }

}
