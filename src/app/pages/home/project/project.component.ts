import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectComponent implements OnInit {

  posts$: Observable<ScullyRoute[]> | undefined;
  @Input() limit = false;

  constructor(private srs: ScullyRoutesService) { }

  ngOnInit(): void {
    this.posts$ = this.srs.available$.pipe(
      map(routeList => routeList.filter((route: ScullyRoute) => route.route.startsWith(`/blog/`))),
      map(blogs => blogs.sort((a, b) => (a.date > b.date ? -1 : 1))),
    );
  }

}
