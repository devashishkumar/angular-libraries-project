### Documentation

This library is use to render google maps in your application. you will have to pass 'latLong' as a input to display google maps in your application. in case you want to add markers of your map neary by locations you will have to pass markers data as per the below defined format. when user click on any particular marker an event will execute and user will notify on which marker user has been clicked

### Installation

```sh
npm install google-maps-angular
```

### in app.module following changes required

import { GoogleMapsAngularModule } from 'google-maps-angular';
import library and use GoogleMapsAngularModule in imports array

### How we use google-maps-angular library in our applications

```sh
<lib-google-maps-angular (markerClicked)="yourComponentMethod($event)" [markers]="markers"
    [latLong]="latLong" [apiKey]="'your google api key'" [googleMapDefaultIcon]="googleMapDefaultIcon"></lib-google-maps-angular>
```

### latLong config format

latLong = {
    lat: your latitide,
    long: your longitude
  };

### markers config format

markers = [
    {
      lat: your marker latitude,
      long: your marker longitude,
      labelDetails: {
        text: 'Marker Text display on marker this is required',
        fontWeight: 'normal',
        fontSize: '12px',
        color: 'white'
      }
    }
  ];

### Inputs

| Input | Purpose |
| ------ | ------ |
| apiKey:required | This is a google maps api key |
| latLong:required | This is an object in which we will pass lat/long to display map of that particular area |
| googleMapDefaultIcon:optional | custom icon path which you want to display as a marker icon |
| markers:optional | we will pass as an array in case we want to display neary by markers in that particular map |

### Events

| Output | Purpose |
| ------ | ------ |
| markerClicked | This emitter will trigger when user click on any particular marker and return that particular marker information|

### [Demo](https://googlemapsangulardemo.herokuapp.com/)

