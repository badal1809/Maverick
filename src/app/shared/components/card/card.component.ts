import { Component, OnInit, Input } from '@angular/core';
import { ICard } from '../../../models/ICard';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  cardImages = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  public innerText: string = "Some quick example text to build on the card title and make up the bulk of the card's content.";
  @Input() public cardData: ICard;
  public title: string = "Dummy text"
  public redirectLinkDum = "#";
  constructor() {
   // this.title = this.cardData.Tier1Name;
    console.log(this.cardData);
  }

  ngOnInit(): void {
    console.log(this.cardData);
  }

}
