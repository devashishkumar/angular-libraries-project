import { Component, OnInit } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ashish-gmap-library';
  lat: any = 28.5636;
  long: any = 77.3726;
  latLong: any = {
    lat: 28.5636,
    long: 77.3726
  };
  nMap: any = {};

  ngOnInit() {
  }
}
