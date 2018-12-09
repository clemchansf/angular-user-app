import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() limit : number;
  @Input() max : number;
  @Output() seeAll = new EventEmitter<any>();

  public showAll = true;
  constructor() { }

  ngOnInit() {
  }

  public handleSeeAll() {
    this.seeAll.emit(this.showAll);
    this.showAll = !this.showAll;
  }
}
