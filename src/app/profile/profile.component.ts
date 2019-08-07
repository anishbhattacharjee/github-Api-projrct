import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})


export class ProfileComponent implements OnInit {
  users : any;
  repos : any;
  constructor(private profileservice : ProfileService) {
    this.profileservice.getUser().subscribe( p => p);
    this.profileservice.getAlluser().subscribe(p => {
      this.users = p;
    //  console.log(this.users);
      
    })

  
   }

  ngOnInit() {
   
  }
  showName(data){
    console.log(data);
    this.profileservice.getRepos(data).subscribe(t => {
      this.repos = t;
      console.log(this.repos);
    });

  }

}
