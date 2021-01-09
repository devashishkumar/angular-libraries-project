import { Component, Input, OnInit } from '@angular/core';
declare var google: any;

@Component({
  selector: 'google-maps-angular',
  templateUrl: './google-maps-angular.component.html',
  styleUrls: ['./google-maps-angular.component.css']
})
export class GoogleMapsAngularComponent implements OnInit {
  @Input() latLong: any = {};
  nMap: any = {};
  divId: string = '';

  constructor() { }

  ngOnInit(): void {
    this.divId = this.generateDynamicString(10);
    setTimeout(() => {
      this.loadMap();
    }, 0);
  }

  /**
   * load google maps
   */
  loadMap() {
    let googleInit = this.getGoogleInitData(this.latLong.lat, this.latLong.long);
    this.nMap = new google.maps.Map(document.getElementById(this.divId), googleInit);
  }

  /**
   * init default data into google maps
   * @param lattitude float
   * @param longtitude float
   */
  getGoogleInitData(lattitude, longtitude) {
    return {
      zoom: 16,
      center: new google.maps.LatLng(lattitude, longtitude),
      styles: [{ "featureType": "administrative.country", "elementType": "geometry", "stylers": [{ "visibility": "simplified" }, { "hue": "#ff0000" }] }]
    };
  }

  /**
   * generate dynamic string
   * @param length number
   */
  generateDynamicString(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

}
