import { Component, OnInit } from '@angular/core';
import { ITuneApiService } from '../services/itune-api.service';
@Component({
  selector: 'app-itune-search',
  templateUrl: './itune-search.component.html',
  styleUrls: ['./itune-search.component.css']
})
export class ITuneSearchComponent implements OnInit {

  constructor(private iTuneService:ITuneApiService) { }

  ngOnInit(): void {
    this.iTuneService.getResultsITunes("Michael","musicArtist").subscribe(res => {
          console.log(res);
      });
  }

}
