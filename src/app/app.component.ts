import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMapsAngularComponent} from 'google-maps-angular';
declare var google: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ashish-gmap-library';
  // lat: any = 28.5636;
  // long: any = 77.3726;
  // noida sector 49 lat/long
  // latLong: any = {
  //   lat: 28.5636,
  //   long: 77.3726
  // };
  // kanpur govind nagar lat/long
  latLong: any = {
    lat: 26.4492,
    long: 80.3094
  };
  nMap: any = {};
  @ViewChild('googleComponent') googleMapCompObj: GoogleMapsAngularComponent

  ngOnInit() {
  }
}
