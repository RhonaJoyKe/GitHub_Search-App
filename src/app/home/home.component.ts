import { Component, OnInit } from '@angular/core';
import { UsrepodataService } from '../services/usrepodata/usrepodata.service';
import { User } from '../classes/user/user';
import { Repos } from '../classes/repository/repos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userDetails!: User
  userRepositories!: Repos;
  constructor(private usrepodataService: UsrepodataService) {}

  ngOnInit(): void {
    this.getdetailsUser('RhonaJoyKe');
    this.getdetailsRepo('RhonaJoyKe');
  }

  // subscribing to the Api Request for user details
  getdetailsUser(ghubUsername: any) {
    this.usrepodataService.fetchUserRequest(ghubUsername).then(
      (response) => {
        this.userDetails = this.usrepodataService.gottenUserdetails;
      },
      (error) => {
        console.log(error);
      }
    
    );
  } 
    
    // subscribing to the Api Request for repo details
    getdetailsRepo(ghubUsername: any) {
      this.usrepodataService.fetchUserRepositoryRequest(ghubUsername).then(
        (response) => {
          this. userRepositories= this.usrepodataService. gottenReporepodetails;
          console.log(this.userRepositories);
        },
        (error) => {
          console.log(error);
        }
      ); // end of getUserRepositoryRequest
    }
}


