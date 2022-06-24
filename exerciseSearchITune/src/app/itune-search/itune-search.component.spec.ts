import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ITuneSearchComponent } from './itune-search.component';

describe('ITuneSearchComponent', () => {
  let component: ITuneSearchComponent;
  let fixture: ComponentFixture<ITuneSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ITuneSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ITuneSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
