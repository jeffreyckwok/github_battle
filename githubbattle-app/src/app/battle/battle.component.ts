import { Component, OnInit } from '@angular/core';
import { BattleService } from './../battle.service';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {
  form1Filled: Boolean = false;
  form2Filled: Boolean = false;
  battleStarted: Boolean = false;
  player1 = {username: "", score: 0, imagePath: "https://pbs.twimg.com/profile_images/1990249248/image.jpg"}
  player2 = {username: "", score: 0, imagePath: "https://pbs.twimg.com/profile_images/1990249248/image.jpg"}
  constructor(private _battleService: BattleService) { }

  ngOnInit() {
  }
  startBattle(){
  	this.battleStarted = true;
  }
  dataFromPlayer1(data){
  	console.log("in dataFromPlayer1");
  	this._battleService.getInfo(data)
  	.then((data)=>{
  		console.log('successfully got api info');
  		this._battleService.addUser(data)
  		.then((data)=>{
  			console.log('added user');
  			this.form1Filled = true;
  			this.player1 = data;
  		})
  		.catch(errors=>console.log(errors));
  	})
  	.catch(error=>console.log(error))
  }
  dataFromPlayer2(data){
  	console.log("in dataFromPlayer1");
  	this._battleService.getInfo(data)
  	.then((data)=>{
  		console.log('successfully got api info');
  		this._battleService.addUser(data)
  		.then((data)=>{
  			console.log('added user');
  			this.form2Filled = true;
  			this.player2 = data;
  		})
  		.catch(errors=>console.log(errors));
  	})
  	.catch(error=>console.log(error))
  }

}
