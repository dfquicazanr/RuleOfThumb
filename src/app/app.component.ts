import {Component, OnInit} from '@angular/core';
import {RulingsServiceService} from './services/rulings-service/rulings-service.service';
import {Ruling} from '~models/ruling';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  rulingsList: Ruling[] = [];

  viewType = 'grid';

  constructor(private rulingsServiceService: RulingsServiceService) { }

  ngOnInit(): void {
    this.rulingsServiceService.list()
      .pipe(map(data => data.map(ruling => this.calculatePercentagesAndOpinion(ruling))))
      .subscribe(data => this.rulingsList = data);
  }

  calculatePercentagesAndOpinion = (ruling: Ruling): Ruling  => {
    const totalVotes = ruling.votes.positive + ruling.votes.negative;
    return {
      ...ruling,
      votesPercentages: {
        positive: ruling.votes.positive / totalVotes * 100,
        negative: ruling.votes.negative / totalVotes * 100
      },
      votesOpinion: ruling.votes.positive > ruling.votes.negative ? 'positive' : 'negative'
    };
  }
}
