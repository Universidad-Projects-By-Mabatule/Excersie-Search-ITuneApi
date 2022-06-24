import { Component,Input, OnInit,ChangeDetectionStrategy } from '@angular/core';
import { IModelResultValues } from 'src/app/interfaces/imodel-result-values';
@Component({
  selector: 'app-card-result',
  templateUrl: './card-result.component.html',
  styleUrls: ['./card-result.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardResultComponent{
  @Input() public result!: IModelResultValues;
}
