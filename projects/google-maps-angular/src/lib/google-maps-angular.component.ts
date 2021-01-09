import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
declare var google: any;

@Component({
  selector: 'google-maps-angular',
  templateUrl: './google-maps-angular.component.html',
  styleUrls: ['./google-maps-angular.component.css']
})
export class GoogleMapsAngularComponent implements OnInit {
  @Input() latLong: any = {};
  @Output() markerClickEvent = new EventEmitter();
  @Input() markers = [];
  radius: any = 2;
  nMap: any = {};
  divId: string = '';
  customMarkers = [];

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
    this.renderMarkers(this.latLong);
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
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  /**
   * get closest latitudes/longitudes
   * @param event object
   */
  renderMarkers(event) {
    var lat = event.long;
    var lng = event.long;
    var R = this.radius; // radius of earth in km
    
    // window.console.log(this.nMap.marker, '70');
    // return;
    for (let i = 0; i < this.markers.length; i++) {
      const currentLat = this.markers[i].lat;
      const currentLong = this.markers[i].long;
      const currentType = this.markers[i].type;

      const marker = new google.maps.Marker({
        position: new google.maps.LatLng(currentLat, currentLong),
        map: this.nMap,
        label: {
          text: currentType,
          fontWeight: 'normal',
          fontSize: '14px',
          color: 'white'
        }
      });

      marker.setValues({ id: i, type: currentType });
			((marker, l) => {
				google.maps.event.addListener(marker, 'click', () => {
          // window.console.log(l, this.markers[l], '119');
          this.markerClickEvent.emit({rowClicked: l});
				});
			})(marker, i);
			this.customMarkers.push(marker);
    }
  }

}
