import { Component, OnDestroy } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import { AuthenticationService } from "./authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  title = 'developer-site';
  portfolio = [{link:"#", slug:"Test", desc:"Test"}, {link:"#", slug:"Test", desc:"Test"}, {link:"#", slug:"Test", desc:"Test"}, {link:"#", slug:"Test", desc:"Test"}];
  blog = [{link:"#", slug:"Test", desc:"Test"}, {link:"#", slug:"Test", desc:"Test"}, {link:"#", slug:"Test", desc:"Test"}, {link:"#", slug:"Test", desc:"Test"}];
  destroyed = new Subject<void>();
  columns = "";
  entries = 0;


  // Create a map to display breakpoint names for demonstration purposes.
  displayNameMap = new Map([
    [Breakpoints.XSmall, '1'],
    [Breakpoints.Small, '2'],
    [Breakpoints.Medium, '3'],
    [Breakpoints.Large, '4'],
    [Breakpoints.XLarge, '5'],
  ]);

  constructor(breakpointObserver: BreakpointObserver, public auth: AuthenticationService) {
    breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ]).pipe(takeUntil(this.destroyed)).subscribe(result => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            this.columns = this.displayNameMap.get(query) ?? 'Unknown';
            this.entries = parseInt(this.columns)-1;
          }
        }
    });
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
