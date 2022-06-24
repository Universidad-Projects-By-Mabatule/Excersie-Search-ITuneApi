import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { ITuneApiService } from '../services/itune-api.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IModelResultValues } from '../interfaces/imodel-result-values';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-itune-search',
  templateUrl: './itune-search.component.html',
  styleUrls: ['./itune-search.component.css']
})
export class ITuneSearchComponent implements OnInit {
  

  public results: Array<IModelResultValues> = [];
  private unsubscribe: Subject<any> = new Subject<any>();
  public formITune!: FormGroup;

  constructor(private iTuneService:ITuneApiService,private cdRef: ChangeDetectorRef,private formBuilder:FormBuilder) { }

  public ngOnInit(): void {
    this.formITune = this.formBuilder.group( {
      searchInput:['',[Validators.required,Validators.required]],
      selectMediaType: ['']
    });

    //this.iTunesSerch();
  }
  public iTunesSerch(){
    this.iTuneService.getResultsITunes(this.formITune.value.searchInput,this.formITune.value.selectMediaType).pipe(
          takeUntil(this.unsubscribe)
        ).subscribe(res => {
            this.results = res.results;
            console.log(this.results);


            this.cdRef.detectChanges();
          });
  }
}
