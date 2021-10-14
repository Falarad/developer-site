import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'developer-site';
  portfolio = [{link:"#", slug:"Test", desc:"Test"}, {link:"#", slug:"Test", desc:"Test"}];
  blog = [{link:"#", slug:"Test", desc:"Test"}, {link:"#", slug:"Test", desc:"Test"}];
}
