import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';

import { UserInfo } from '../user-info';
import { environment } from '../../environments/environment';
import { fadeIn } from '../animations';

@Component({
  selector: 'app-details',
  animations: [ fadeIn ],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {

  @Input() userInfo: UserInfo;
  public keys = [];

  constructor() { }
  
  ngOnInit() {
    this.keys = Object.keys(this.userInfo)
                .filter(k=>!k.match(/^(first|last|avatar|userId)/));
  }

  public getImgSrc() {
    // return `${environment.baseUrl}/assets${this.userInfo.avatarpath}`;
    return 'https://source.unsplash.com/random';
  }
}
