import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { ITuneApiService } from '../services/itune-api.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IModelResultValues } from '../interfaces/imodel-result-values';
import { IModelResultObjet } from '../interfaces/imodel-result-objet';
@Component({
  selector: 'app-itune-search',
  templateUrl: './itune-search.component.html',
  styleUrls: ['./itune-search.component.css']
})
export class ITuneSearchComponent implements OnInit {
  

  public results: Array<IModelResultValues> = [];
  private unsubscribe: Subject<any> = new Subject<any>();

  constructor(private iTuneService:ITuneApiService,private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.iTunesSerch();
  }
  public iTunesSerch(){
    this.iTuneService.getResultsITunes("Michael","musicArtist").pipe(
          takeUntil(this.unsubscribe)
        ).subscribe(res => {
            this.results = res.results;
            console.log(this.results)
            this.cdRef.detectChanges();
          });
  }
}
