import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from '../../core/services/home.service';
import { ICardDataboard } from '../../models/ICardDataboard';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();
  public cardDataboard: ICardDataboard[];
  constructor(private homeService: HomeService) {
  }

  ngOnInit() {
    this.homeService.getCardList().pipe(takeUntil(this.destroy$)).subscribe((data: ICardDataboard[]) => {
      this.cardDataboard = data;
      console.log(data);
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }
}
