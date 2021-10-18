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
  constructor(private reposervice: UsrepodataService) {}

  ngOnInit(): void {}

  // captures user input
  searchRepo(){
    this.pro=this.repoFormSearch.value.search;
    this.reposervice.fetchUserRepositoryRequest(this.pro).then(
      (response) => {
        this.repoDeets = this.reposervice.gottenReporepodetails;
    //     this.displayUserDetailContainer = true;
    console.log(this.repoDeets);
    // },
    
      },
    (error) => {
      console.log(error);
      // this.displayGithubUserErrorNotFound = true;
    }
  
    );

  


  }
}