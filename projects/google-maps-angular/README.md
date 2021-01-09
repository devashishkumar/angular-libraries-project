# GoogleMapsAngular

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.13.

## Code scaffolding

Run `ng generate component component-name --project google-maps-angular` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project google-maps-angular`.
> Note: Don't forget to add `--project google-maps-angular` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build google-maps-angular` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build google-maps-angular`, go to the dist folder `cd dist/google-maps-angular` and run `npm publish`.

## Running unit tests

Run `ng test google-maps-angular` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



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







