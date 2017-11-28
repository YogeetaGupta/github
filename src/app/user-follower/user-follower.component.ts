import { Component, OnInit } from '@angular/core';
import { UserFollowerServices} from './user-follower.services';
import { User} from './user'

@Component({
  selector: 'app-user-follower',
  templateUrl: './user-follower.component.html',
  styleUrls: ['./user-follower.component.css']
})
export class UserFollowerComponent implements OnInit {
  username;
  _User={};
  _Follower;
  // mod = new User();
  // edit:string[]=[];
  // a = "vipul";
  constructor(public _userFollowerServices:UserFollowerServices) { }

  ngOnInit() {
    

  }
  

  Save()
  {
    
    this._userFollowerServices.GetUser(this.username)
    .subscribe((users) => {
       this._User= users;
       console.log(this._User);
       
    }); 

    this._userFollowerServices.GetFollowers(this.username)
    .subscribe((followers) => {
       this._Follower = followers;
       console.log(this._Follower)
    }); 
   }


}
