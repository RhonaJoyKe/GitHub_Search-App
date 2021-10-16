import { Injectable } from '@angular/core';
import { User } from 'src/app/classes/user/user';
import { Repos } from 'src/app/classes/repository/repos';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsrepodataService {
  getuserdetails:User;
  getrepodetails:Repos;

  constructor(private http:HttpClient) {
    this.getuserdetails=new User(

      "","","","","",0,0
    )
    this.getrepodetails=new Repos(

      "","","","",
    )
   
   }
}
