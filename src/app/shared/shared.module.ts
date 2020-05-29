import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardComponent } from './components/card/card.component';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    CardComponent
  ],
  imports: [
    NgbModule,
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    CardComponent
  ]
})
export class SharedModule { }
