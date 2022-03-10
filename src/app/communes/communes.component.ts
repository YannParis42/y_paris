import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute
} from '@angular/router';
import {
  Communes
} from 'src/models/communes';
import {
  ApiRegionsService
} from 'src/service/api-regions.service';

@Component({
  selector: 'app-communes',
  templateUrl: './communes.component.html',
  styleUrls: ['./communes.component.scss']
})
export class CommunesComponent implements OnInit {


  code: string = '';
  codeD: string='';
  communesArray: Array < Communes > = [];


  constructor(private apiRegion: ApiRegionsService,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(paramRoute => {
      this.code = paramRoute['numRegion'];
      this.activatedRoute.params.subscribe(route=>{
        this.codeD = route['numDepartements']
      });

      console.log(this.code);
      console.log(this.codeD);

      this.apiRegion.getCommunes(this.codeD).subscribe((jsonData)=>{
        this.communesArray=jsonData

        console.log(this.communesArray);

      });

    });

  }
}
