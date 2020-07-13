import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SafeHtml } from '@angular/platform-browser';
import { Subject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-card-overview',
  templateUrl: './card-overview.component.html',
  styleUrls: ['./card-overview.component.scss']
})
export class CardOverviewComponent implements OnInit {
  isLoading: boolean = false;
  isCardDataLoading: boolean;
  isLoggedIn: boolean = false;
  baseUrl: string;
  http: HttpClient;
  region: string;
  contentTitle: SafeHtml;
  contentText: SafeHtml;
  logoPath: string;
  routeParameters: { RegionId: string };
  regionOverviewResources;
  countryList: string[];
  destroyed = new Subject<any>();
  exportIcon: string;
  overviewContent: string;
  isDocumentExported: Boolean = false;
  isExportFailed: Boolean = false;
  isReportCardDataLoading: Boolean = false;
  previousRefinerKPICard: { Tier1Name: string, Tier2Items: string[] }[] = [];
  previousRefinerReportCard: { Tier1Name: string, Tier2Items: string[] }[] = [];
  constructor() { }

  ngOnInit(): void {
  }


  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
