import { Injectable } from '@angular/core';
import { User } from 'src/app/classes/user/user';
import { Repos } from 'src/app/classes/repository/repos';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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
   fetchUserRequest(ghubUsername: string){
     interface ApiUserResponse{
       name: string,
       username: string,
       avatarurl: string,
       location: string,
       bio: string,
        followers: number,
       following: number,
    

     }
     let userPromise = new Promise<void>((resolve, reject) =>
      this.http
        .get<ApiUserResponse>(
          environment.apiKey +
            '/' +
            ghubUsername +
            '?access_token=' +
            environment.apiKey
        )
        .toPromise()
        .then(
          (response) => {
            this.getuserdetails = response;
            resolve();
          },
          (error) => {
            reject(error);
            console.log(error);
          }
        )
    );
    return userPromise;
  }

}
