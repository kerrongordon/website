import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'kg-card-infor',
  templateUrl: './card-infor.component.html',
  styleUrls: ['./card-infor.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardInforComponent implements OnInit {

  @Input() postDate: number;
  public date: string;

  constructor() { }

  ngOnInit() {
  	this.dateToString();
  }

  private dateToString() {
  	const d = new Date(this.postDate);
  	return this.date = `Posted On ${d.getUTCMonth()}/${d.getUTCDate()}/${d.getUTCFullYear()}`;
  }

}
