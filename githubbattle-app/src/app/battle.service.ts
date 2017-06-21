import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class BattleService {

  constructor(private _http: Http) { }
    getInfo(user){
      return this._http.get('https://api.github.com/users/'+user.username).map(response=>response.json()).toPromise();
    }

    addUser(userInfo) {
      // we need avatar_url, login, followers, public_repos
      var postData = {
        username: userInfo.login,
        score: (userInfo.followers+userInfo.public_repos)*12,
        imagePath: userInfo.avatar_url
      }
      return this._http.post('/api/players', postData)
      .map(response=>response.json()).toPromise();
    }

    getAllInfo(){
      return this._http.get('/api/players').map(response=>response.json()).toPromise();
    }
}
