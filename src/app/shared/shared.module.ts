import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardComponent } from './components/card/card.component';
import { LoaderComponent } from './components/loader/loader.component';
import { BannerComponent } from './components/banner/banner.component';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    CardComponent,
    LoaderComponent,
    BannerComponent
  ],
  imports: [
    NgbModule,
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    CardComponent,
    LoaderComponent,
    BannerComponent
  ]
})
export class SharedModule { }
