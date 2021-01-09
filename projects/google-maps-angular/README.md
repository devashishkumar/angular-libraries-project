## documentation

This library is use to render google maps in your application. you will have to pass 'latLong' as a input to display google maps in your application. you you want to add markers of your nearyby locations you will have to pass markers data as per the below defined format. when user click on any particular marker an event will execute and user will notify on which marker user has been clicked

import google maps javascript library in your html file and replace yourKey with your google maps api key
<script src="https://maps.googleapis.com/maps/api/js?key=yourKey&**callback=initMap"></script>

Then please follow below steps

1. npm install google-maps-angular

2. in app.module following changes required

## import library
import { GoogleMapsAngularModule } from 'google-maps-angular';
add this module in 'imports' array in app.module

## how we use this map library in components:

<google-maps-angular (markerClickEvent)="yourMethod($event)" [markers]="markers" [latLong]="latLong"></google-maps-angular>

## latLong will be input in the following format

latLong = {
    lat: your latitide,
    long: your longitude
  };

## markers will be input and data format will be as per below format

markers = [
    {
      lat: your latitude,
      long: your longitude,
      type: 'your text which will display in the marker'
    }
  ];
## yourMethod() will execute when user click on particular marker and return a marker refernce in which marker user has been clicked







