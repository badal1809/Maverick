import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  cardImages = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  constructor() { }

  ngOnInit(): void {
  }

}
