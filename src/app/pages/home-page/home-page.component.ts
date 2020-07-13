import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from '../../core/services/home.service';
import { ICardDataboard } from '../../models/ICardDataboard';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Banner } from '../../models/Banner';
import { SourceSet } from '../../models/SourceSet';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit, OnDestroy {
  public bannerdata: Banner;
  destroy$: Subject<boolean> = new Subject<boolean>();
  public cardDataboard: ICardDataboard[];
  public sourceSet: SourceSet[];
  constructor(private homeService: HomeService) {
    this.sourceSet = [
      new SourceSet("https://picsum.photos/1778/600?random&t=0.30653397806681415", "min-width:1779px"),
      new SourceSet("https://picsum.photos/1778/600?random&t=0.30653397806681415", "min-width:1400px"),
      new SourceSet("https://picsum.photos/1259/472?random&t=0.30653397806681415", "min-width:1084px"),
      new SourceSet("https://picsum.photos/1083/609?random&t=0.30653397806681415", "min-width:768p"),
      new SourceSet("https://picsum.photos/767/431?random&t=0.30653397806681415", "min-width:540px"),
      new SourceSet("https://picsum.photos/539/303?random&t=0.30653397806681415", "min-width:0px")
    ]
    this.bannerdata = new Banner("Dummy Title", "https://picsum.photos/1259/472?random&t=0.30653397806681415", "Image placeholder", this.sourceSet);
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
