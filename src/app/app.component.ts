import { Component, OnInit } from '@angular/core';

import { UserDataService } from './user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserDataService],
})
export class AppComponent implements OnInit {
  title = 'profile-app';
  public data = null;
  public isDataAvailable = false;
  public showFollowings = false;
  public showFollowers = false;

  constructor(private userDataService: UserDataService) { }

  ngOnInit() {
    this.userDataService.getData()
    .subscribe(resp => {
      this.data = resp['data'];
      this.isDataAvailable = true;
    });
  }

  public onSelectedFollowType(type) {
      switch(type) {
        case 'followings':
          this.showFollowings = true;
          this.showFollowers = false;
          break;
        case 'followers':
          this.showFollowings = false;
          this.showFollowers = true;
          break;
        default: 
          this.showFollowings = true;
          this.showFollowers = false;
      }
  }
}
