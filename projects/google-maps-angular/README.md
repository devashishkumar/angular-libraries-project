### Documentation

This Library is use to render google maps in our application. We will have to pass 'latLong' as a input to display google maps in our application. in case we want to add markers of our map neary by locations we will have to pass markers data as per the below defined format. when user click on any particular marker an event will execute and user will notify on which marker user has been clicked

### Installation

```sh
npm install google-maps-angular
```

### import GoogleMapsAngularModule in app.module

```sh
import { GoogleMapsAngularModule } from 'google-maps-angular';
imports: [
    GoogleMapsAngularModule
  ]
```

### google-maps-angular library usage in our application

```sh
<lib-google-maps-angular (markerClicked)="yourComponentMethod($event)" [markers]="markers" [latLong]="latLong" [apiKey]="'google api key'" [googleMapDefaultIcon]="googleMapDefaultIcon"></lib-google-maps-angular>
```

### latLong config format
```sh
latLong = {
    lat: 'your latitide',
    long: 'your longitude'
  };
```
### markers config format
```sh
markers = [
    {
      lat: 'marker latitude',
      long: 'marker longitude',
      labelDetails: {
        text: 'Marker Text display on marker this is required',
        fontWeight: 'normal',
        fontSize: '12px',
        color: 'white'
      }
    }
  ];
```
### Inputs

| Input | Type | Required/Optional| Uses |
| ------ | ------ | ------ | ------ |
| apiKey | string | required | Google Map API key |
| latLong | object | required | We will pass lat/long to display map of that particular area |
| googleMapDefaultIcon | string | optional | Custom icon path which we want to display as a marker icon |
| markers | array | optional | We will pass as an array in case we want to display nearby by markers in that particular map |

### Events

| Output | Uses |
| ------ | ------ |
| markerClicked | This emitter will trigger when user click on any particular marker and return that particular marker information|

### [Demo](https://googlemapsangulardemo.herokuapp.com/)

