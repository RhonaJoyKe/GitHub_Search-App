import { Component, OnInit,ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Repos } from '../classes/repository/repos';
import { UsrepodataService } from '../services/usrepodata/usrepodata.service';


@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  @ViewChild('repoForm') repoFormSearch: NgForm
  pro:string;
  repoDeets;
  showDeets=false;
  GithubUserNotFound = false;
    // captures user input
    searchRepo(){
      this.pro=this.repoFormSearch.value.search;
      this.reposervice.fetchUserRepositoryRequest(this.pro).then(
        (response) => {
          this.repoDeets = this.reposervice.gottenReporepodetails;
           this.showDeets = true;
      console.log(this.repoDeets);
      
      
        },
      (error) => {
        console.log(error);
        this.GithubUserNotFound = true;
      }
    
      );
  
    
  
  
    }

  constructor(private reposervice: UsrepodataService) {}

  ngOnInit(): void {}


}