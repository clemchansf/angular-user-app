import { Component, OnInit, Input } from '@angular/core';

import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css'],
  providers: [PaginationComponent],
})
export class FollowersComponent implements OnInit {

  @Input() followers;
  @Input() followersCount: number;
  @Input() title: string;
  public showTop = 5;
  public showLimit;
  
  constructor() { }

  ngOnInit() {
  }
  public getAvatarSrc(currentFollowing) {
    return `/assets/${currentFollowing.follower.avatar}`;
  }

  public onSeeAll(seeAllValue) {
    this.showLimit = seeAllValue ? this.followersCount
                                 : this.showTop;
  }
}
