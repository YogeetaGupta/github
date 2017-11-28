import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserFollowerServices {

   private _url = "https://api.github.com/users/";

   
    constructor(private http:Http){}

    GetUser(username)
        {
            return this.http.get(this._url + username)
            .map((_user:Response) => _user.json());
        }
    GetFollowers(username)
        {
            return this.http.get(this._url+ username + "/followers")
            .map((_Followers:Response) => _Followers.json());
        }

    


    
}