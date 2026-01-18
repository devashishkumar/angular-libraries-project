import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsAngularService } from './google-maps-angular.service';

declare var google: any;

@Component({
  selector: 'ng-google-maps',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './google-maps-angular.component.html',
  styleUrls: ['./google-maps-angular.component.css'],
  providers: [
    GoogleMapsAngularService,
    { provide: GoogleMapsAngularService, useValue: { googleMapsKey: 'GoogleMapsApiKey' } }
  ]
})
export class GoogleMapsAngularComponent implements OnInit {
  @Input() latLong: any = {};
  @Output() markerClicked = new EventEmitter();
  @Input() markers = [];
  @ViewChild('map') mapContainer: ElementRef;
  radius: any = 2;
  nMap: any = {};
  customMarkers = [];
  @Input() googleMapDefaultIcon = '';
  @Input() googleMapActiveIcon = '';

  constructor(private mapsServiceObj: GoogleMapsAngularService) { }

  ngOnInit(): void {
    console.log('Google Maps Angular Component Loaded');
    if (!document.getElementById('googlemaps')) {
      const googleMapScript = document.createElement('script') as HTMLScriptElement;
      const googleMapsKey = this.mapsServiceObj['googleMapsKey'];
      console.log('Google Maps Key:', googleMapsKey);
      googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsKey}&libraries=marker`;
      googleMapScript.id = 'googlemaps';
      googleMapScript.async = true;
      
      // Wait for the script to load before initializing the map
      googleMapScript.onload = () => {
        setTimeout(() => {
          if (this.mapContainer && this.mapContainer.nativeElement) {
            this.loadMap();
          }
        }, 500);
      };
      
      document.head.appendChild(googleMapScript);
    } else {
      // Script already loaded, initialize map
      setTimeout(() => {
        if (this.mapContainer && this.mapContainer.nativeElement) {
          this.loadMap();
        }
      }, 2000);
    }
  }

  /**
   * load google maps
   */
  private loadMap() {
    const googleInit = this.getGoogleInitData(this.latLong.lat, this.latLong.long);
    this.nMap = new google.maps.Map(this.mapContainer.nativeElement, googleInit);
    this.renderMarkers();
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
      styles: [{
        featureType: 'administrative.country',
        elementType: 'geometry',
        stylers: [{ visibility: 'simplified' }, { hue: '#ff0000' }]
      }]
    };
  }

  /**
   * 
   * @param currIcon marker icon
   * @param labelX label x position
   * @returns 
   */
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
  private renderMarkers() {
    if (this.markers && this.markers.length > 0) {
      this.markers.forEach((currentMarker, i) => {
        const currentLat = currentMarker.lat;
        const currentLong = currentMarker.long;
        const currentType = currentMarker.type;

        // Create a container for the marker content
        const markerContent = document.createElement('div');
        markerContent.className = 'advanced-marker-content';
        
        // Add icon if provided
        if (this.googleMapDefaultIcon) {
          const icon = document.createElement('img');
          icon.src = this.googleMapDefaultIcon;
          icon.style.width = '45px';
          icon.style.height = '45px';
          icon.style.cursor = 'pointer';
          markerContent.appendChild(icon);
        }
        
        // Add label if provided
        if (this.markers && this.markers[i] && this.markers[i].labelDetails) {
          const label = document.createElement('div');
          label.className = 'marker-label';
          label.textContent = this.markers[i].labelDetails.text || '';
          label.style.fontWeight = this.markers[i].labelDetails.fontWeight || 'normal';
          label.style.fontSize = '12px';
          label.style.textAlign = 'center';
          markerContent.appendChild(label);
        }
        const marker = new google.maps.marker.AdvancedMarkerElement({
          position: new google.maps.LatLng(currentLat, currentLong),
          map: this.nMap,
          content: markerContent,
          title: this.markers && this.markers[i] ? this.markers[i].labelDetails?.text : ''
        });

        // Store custom data on the marker
        (marker as any).id = i;
        (marker as any).type = currentType;
        
        // Add click listener
        marker.addListener('click', () => {
          this.markerClicked.emit({ rowClicked: i });
        });
        
        this.customMarkers.push(marker);
      });
    }
  }
}
