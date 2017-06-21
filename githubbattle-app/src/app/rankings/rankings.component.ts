import { Component, OnInit } from '@angular/core';
import { BattleService } from './../battle.service';

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.css']
})
export class RankingsComponent implements OnInit {
  players: any[] = [];
  constructor(private _battleService: BattleService) {
    this._battleService.getAllInfo()
  	.then((data)=>{
  		console.log(data);
  		this.players = data;
  	})
  	.catch(data=>console.log(data));
  }

  ngOnInit() {
  }

}
