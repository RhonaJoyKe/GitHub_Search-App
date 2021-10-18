import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../classes/user/user';
import { UsrepodataService } from '../services/usrepodata/usrepodata.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @ViewChild('userForm') userFormSearch: NgForm
  pro:string;
  userDeets:User;
  constructor(private userservice: UsrepodataService) {}

  ngOnInit(): void {}

  // captures user input
  searchUser(){
    this.pro=this.userFormSearch.value.search;
    this.userservice.fetchUserRepositoryRequest(this.pro).then(
      (response) => {
        this.userDeets = this.userservice.gottenUserdetails;
    //     this.displayUserDetailContainer = true;
    console.log(this.userDeets);
    // },
    
      },
    (error) => {
      console.log(error);
      // this.displayGithubUserErrorNotFound = true;
    }
  
    );

  }

 
}

// export class ProfileComponent implements OnInit {
//   @ViewChild('j') searchUserForm: NgForm
//   profile:string;
//   userData: User;

//   displayUser=false;

//   searchUser(){
//     this.profile=this.searchUserForm.value.search;
//     console.log(this.profile)

//     this.requestProfile.getUserDataRequest(this.profile).then(
//       (response)=>{
//         this.userData = this.requestProfile.userInfor;
//         console.log(this.userData);
//       },
//       (error) => {
//         console.log(error);
//       }
//     );
//     this.displayUser=true;
//   }

//     constructor(private requestProfile : ProfileServiceService ) {}


//   ngOnInit(): void {
//   }

// }