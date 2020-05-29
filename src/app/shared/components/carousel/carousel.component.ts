import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  images = [1, 2, 3].map(() => `https://picsum.photos/2200/500?random&t=${Math.random()}`);

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 1500;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit(): void {
  }

}
