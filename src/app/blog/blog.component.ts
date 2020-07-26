import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated

})
export class BlogComponent implements OnInit, OnDestroy {

  titleSub: Subscription | undefined;
  title: string | undefined;

  constructor(
    private srs: ScullyRoutesService
  ) { }

  ngOnInit(): void {
    this.titleSub = this.srs.getCurrent().subscribe(d => this.title = d.title);
  }

  ngOnDestroy(): void {
    this.titleSub?.unsubscribe();
  }
}
