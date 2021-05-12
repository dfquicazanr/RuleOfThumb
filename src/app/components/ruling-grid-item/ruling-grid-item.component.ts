import {Component, Input, OnInit} from '@angular/core';
import {Ruling} from '~models/ruling';

@Component({
  selector: 'app-ruling-grid-item',
  templateUrl: './ruling-grid-item.component.html',
  styleUrls: ['./ruling-grid-item.component.scss']
})
export class RulingGridItemComponent implements OnInit {

  positiveImage = 'assets/img/thumbs-up.svg';
  negativeImage = 'assets/img/thumbs-down.svg';
  opinionImage = '';

  @Input() ruling: Ruling;

  constructor() { }

  ngOnInit(): void {
    this.opinionImage = this.ruling.votesOpinion === 'positive' ? this.positiveImage : this.negativeImage;
  }

}
