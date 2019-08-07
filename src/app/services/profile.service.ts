import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient: HttpClient) {
 
   }
getAlluser(){
  return this.httpClient.get("https://api.github.com/users").pipe(map(res => res ));
}
   getUser(){

    return this.httpClient.get("https://api.github.com/search/users?q=anishbhattacharjee").pipe(map(res => res ));
  }
  getRepos(d){
    return this.httpClient.get("https://api.github.com/users/" + d +"/repos").pipe(map(res => res ));
  }
}
