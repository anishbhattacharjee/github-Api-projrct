import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})


export class ProfileComponent implements OnInit {
  users: Object;
  repos: Object;
 
  username: any;

  constructor(private profileservice: ProfileService) {

    this.profileservice.getUserlist().subscribe(p => {
      this.users  = p ;
    // console.log(this.users);

    });
   }

  ngOnInit() {


  }

setUser(searchRes){
this.users =searchRes.items;

}
  onKey() {
    this.profileservice.getSearchResult(this.username).subscribe(res =>  this.setUser(res));
  }



  showName(data){
   ;
    this.profileservice.getRepos(data).subscribe(t => {
      this.repos = t;
     
    });

  }

}
