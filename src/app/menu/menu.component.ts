import { Component, EventEmitter, Input, Output } from '@angular/core';

import { fadeIn } from '../animations';

@Component({
  selector: 'app-menu',
  animations: [ fadeIn ],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  @Input() data: Object = {};
  @Output() selectedFollowType = new EventEmitter<string>();
  public isFollowings = false;
  public isFollowers = false;

  constructor() { }

  ngOnInit() {
  }

  public captureFollowings() {
      this.isFollowings = true;
      this.isFollowers = false;
      this.selectedFollowType.emit('followings');
  }

  public captureFollowers() {
    this.isFollowings = false;
    this.isFollowers = true;
    this.selectedFollowType.emit('followers');
  }
}
