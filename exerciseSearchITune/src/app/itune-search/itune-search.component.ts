import { Component, OnInit,ChangeDetectorRef,ChangeDetectionStrategy,ViewChild,ElementRef,Renderer2} from '@angular/core';
import { ITuneApiService } from '../services/itune-api.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IModelResultValues } from '../interfaces/imodel-result-values';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IModelMediaType } from '../interfaces/imodel-media-type';
@Component({
  selector: 'app-itune-search',
  templateUrl: './itune-search.component.html',
  styleUrls: ['./itune-search.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ITuneSearchComponent implements OnInit {
  
  @ViewChild('asImageNotResult') imgNotResults!: ElementRef

  public results: Array<IModelResultValues> = [];
  private unsubscribe: Subject<any> = new Subject<any>();
  public formITune!: FormGroup;

  readonly mediaType:IModelMediaType[]=[
    {value: 'All'       , viewValue: 'All'},
    {value: 'tvSeason'    , viewValue: 'tvShow'},
    {value: 'software'  , viewValue: 'software'},
    {value: 'shortFilm' , viewValue: 'shortFilm'},
    {value: 'audiobook' , viewValue: 'audiobook'},
    {value: 'musicVideo', viewValue: 'musicVideo'},
    {value: 'musicArtist' , viewValue: 'music'},
    {value: 'podcast'     , viewValue: 'podcast'},
    {value: 'movie'       , viewValue: 'movie'}
  ];

  constructor(private iTuneService:ITuneApiService,private cdRef: ChangeDetectorRef,private formBuilder:FormBuilder, private renderer2:Renderer2) { }

  public ngOnInit(): void {
    this.formITune = this.formBuilder.group( {
      searchInput:['',[Validators.required,Validators.required]],
      selectMediaType: ['']
    });

    //this.iTunesSerch();
  }
  public changeImg(flag:boolean): void{
    const asImg= this.imgNotResults.nativeElement;
    this.renderer2.setAttribute(asImg,'src',flag?'assets/images/not_results.gif':'')
  }
  public iTunesSerch(){
    this.iTuneService.getResultsITunes(this.formITune.value.searchInput,this.formITune.value.selectMediaType).pipe(
          takeUntil(this.unsubscribe)
        ).subscribe(res => {
          this.results = res.results;
          this.results.length==0 ? this.changeImg(true): this.changeImg(false);
          this.cdRef.detectChanges();
          });
  }
}
