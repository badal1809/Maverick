import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { defaultIfEmpty, map } from 'rxjs/operators';
import { HomeService } from '../../../core/services/home.service';
import { INavigationItem } from '../../../models/INavigationItem';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  destroy$: Subject<boolean> = new Subject<boolean>();

  public navigationItems: INavigationItem[];
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.getNavigationList().pipe(takeUntil(this.destroy$)).subscribe((data: INavigationItem[]) => {
      this.navigationItems = data;
      console.log(data);
    })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }
}
