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
  latLong: any = {
    lat: 28.5636,
    long: 77.3726
  };
  // kanpur govind nagar lat/long
  // latLong: any = {
  //   lat: 26.4492,
  //   long: 80.3094
  // };

  markers = [
    {
      lat: 28.5661,
      long: 77.3698,
      type: 'Shiv Mandir Barola'
    },
    {
      lat: 28.5666,
      long: 77.3664,
      type: 'Budh Bazaar'
    },
    {
      lat: 28.5636,
      long: 77.3656,
      type: 'Prayag Hospital'
    },
    {
      lat: 28.5579,
      long: 77.3726,
      type: 'Shri Ram Hospital'
    },
    {
      lat: 28.5640,
      long: 77.3780,
      type: 'Post Office Barola'
    }
  ];
  nMap: any = {};

  ngOnInit() {
  }

  /**
   * get data on particular marker clicked
   * @param data object
   */
  markerClicked(data) {
    console.log(data, '53');
  }
}
