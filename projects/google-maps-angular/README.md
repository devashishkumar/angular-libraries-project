## Documentation

This library is use to render google maps in your application. you will have to pass 'latLong' as a input to display google maps in your application. in case you want to add markers of your map neary by locations you will have to pass markers data as per the below defined format. when user click on any particular marker an event will execute and user will notify on which marker user has been clicked

### Installation

```sh
npm install google-maps-angular
```
Then import google maps javascript library in your html file and replace yourKey with your google maps api key
<script src="https://maps.googleapis.com/maps/api/js?key=yourKey&**callback=initMap"></script>

### in app.module following changes required

import { GoogleMapsAngularModule } from 'google-maps-angular';
import library and use GoogleMapsAngularModule in imports array

### How we use google-maps-angular library in components:

<google-maps-angular (markerClickEvent)="yourMethod($event)" [markers]="markers" [latLong]="latLong"></google-maps-angular>

### latLong will be input in the following format

latLong = {
    lat: your latitide,
    long: your longitude
  };

### markers will be input and data format will be as per below format

markers = [
    {
      lat: your latitude,
      long: your longitude,
      type: 'your text which will display in the marker'
    }
  ];

| Input | input purpose |
| ------ | ------ |
| latLong | This is an object in which we will pass lat/long to display map of that particular area |
| markers | we will pass as an array in case we want to display neary by markers in that particular map |

### markerClickEvent emitter

| Output | Output purpose |
| ------ | ------ |
| markerClickEvent | This emitter will trigger when user click on any particular marker and return that particular marker information|

### [Demo](https://googlemapsangulardemo.herokuapp.com/)

### In Progress Features
Working on marker custom icons. user can pass custom icons for markers in case they don't want to display google default marker icons.

