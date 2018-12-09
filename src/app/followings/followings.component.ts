import { Component, OnInit, Input } from '@angular/core';
import {trigger, transition, style, animate, query, stagger} from '@angular/animations';

import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-15px)' }),
            stagger(
              '50ms',
              animate(
                '550ms ease-out',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            )
          ],
          { optional: true }
        ),
        query(':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ],
  selector: 'app-followings',
  templateUrl: './followings.component.html',
  styleUrls: ['./followings.component.css'],
  providers: [PaginationComponent],
})
export class FollowingsComponent implements OnInit {

  @Input() followings;
  @Input() followingsCount: number;
  @Input() title: string;
  public showTop = 5;
  public showLimit;

  constructor() { }

  ngOnInit() {
    this.showLimit = this.showTop;
  }
  public getAvatarSrc(currentFollowing) {
    // return `/assets/${currentFollowing.followee.avatar}`;
    return `assets/avatars/default_person.svg`;
  }

  public onSeeAll(seeAllValue) {
      this.showLimit = seeAllValue ? this.followingsCount
                                   : this.showTop;
  }
}
