import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
declare var google: any;

@Component({
  selector: 'lib-google-maps-angular',
  templateUrl: './google-maps-angular.component.html',
  styleUrls: ['./google-maps-angular.component.css']
})
export class GoogleMapsAngularComponent implements OnInit {
  @Input() latLong: any = {};
  @Output() markerClicked = new EventEmitter();
  @Input() markers = [];
  radius: any = 2;
  nMap: any = {};
  divId = '';
  customMarkers = [];
  @Input() googleMapDefaultIcon = '';
  @Input() googleMapActiveIcon = '';
  @Input() apiKey = '';

  constructor() { }

  ngOnInit(): void {
    const googleMapScript = document.createElement('SCRIPT');
    googleMapScript.setAttribute(
      'src',
      `https://maps.googleapis.com/maps/api/js?key=${this.apiKey}&**callback=initMap`
    );
    googleMapScript.setAttribute('defer', '');
    googleMapScript.setAttribute('async', '');
    document.head.appendChild(googleMapScript);
    this.divId = this.generateDynamicString(10);
    setTimeout(() => {
      this.loadMap();
    }, 2000);
  }

  /**
   * load google maps
   */
  private loadMap() {
    const googleInit = this.getGoogleInitData(this.latLong.lat, this.latLong.long);
    this.nMap = new google.maps.Map(document.getElementById(this.divId), googleInit);
    this.renderMarkers(this.latLong);
  }

  /**
   * init default data into google maps
   * @param lattitude float
   * @param longtitude float
   */
  private getGoogleInitData(lattitude, longtitude) {
    return {
      zoom: 16,
      center: new google.maps.LatLng(lattitude, longtitude),
      styles: [{ featureType: 'administrative.country',
      elementType: 'geometry',
      stylers: [{ visibility: 'simplified' }, { hue: '#ff0000' }] }]
    };
  }

  /**
   * generate dynamic string
   * @param length number
   */
  private generateDynamicString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  private markerIconConfiguration(currIcon, labelX) {
    return {
      url: currIcon,
      size: new google.maps.Size(45, 45),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0, 20),
      // scaledSize: new google.maps.Size(defaultSize, defaultSize),
      labelOrigin: new google.maps.Point(labelX, 15.5),
    };
  }

  /**
   * get closest latitudes/longitudes
   * @param event object
   */
  private renderMarkers(event) {
    const lat = event.long;
    const lng = event.long;
    const R = this.radius; // radius of earth in km

    // window.console.log(this.nMap.marker, '70');
    // return;
    for (let i = 0; i < this.markers.length; i++) {
      const currentLat = this.markers[i].lat;
      const currentLong = this.markers[i].long;
      const currentType = this.markers[i].type;

      const marker = new google.maps.Marker({
        position: new google.maps.LatLng(currentLat, currentLong),
        map: this.nMap,
        icon: this.googleMapDefaultIcon ?
        this.markerIconConfiguration(this.googleMapDefaultIcon, 22) : '',
        label: this.markers && this.markers[i] ? this.markers[i].labelDetails : {}
      });

      marker.setValues({ id: i, type: currentType });
      ((markerObj, l) => {
        google.maps.event.addListener(markerObj, 'click', () => {
          this.markerClicked.emit({ rowClicked: l });
        });
      })(marker, i);
      this.customMarkers.push(marker);
    }
  }

}
