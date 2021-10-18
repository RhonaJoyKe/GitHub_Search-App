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
  showDeets=false;// used to hide the card before the user has clicked on search
  GithubUserNotFound = false; //used to display error message if user was not found
  constructor(private userservice: UsrepodataService) {}

  ngOnInit(): void {}

  
  searchUser(){
    this.pro=this.userFormSearch.value.search;//captures user input
    this.userservice.fetchUserRequest(this.pro).then( 
      (response) => {
        this.userDeets = this.userservice.gottenUserdetails;
       
       this.showDeets=true;
    
    
    
      },
    (error) => {
      console.log(error);
      this.GithubUserNotFound = true;
    }
  
    );

  }

 
}

