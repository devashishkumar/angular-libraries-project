// import { NgModule } from '@angular/core';
// import { GoogleMapsAngularComponent } from './google-maps-angular.component';



// @NgModule({
//   declarations: [GoogleMapsAngularComponent],
//   imports: [
//   ],
//   exports: [GoogleMapsAngularComponent]
// })
// export class GoogleMapsAngularModule { }

import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { CommonModule } from '@angular/common';

import { GoogleMapsAngularComponent } from './google-maps-angular.component';
import { GoogleMapsAngularService } from './google-maps-angular.service';


@NgModule({
  imports:      [ CommonModule, GoogleMapsAngularComponent ],
  exports:      [ GoogleMapsAngularComponent ]
})
export class GoogleMapsAngularModule {
  constructor(@Optional() @SkipSelf() parentModule?: GoogleMapsAngularModule) {
    if (parentModule) {
      throw new Error(
        'GoogleMapsAngularModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(config: GoogleMapsAngularService): ModuleWithProviders<GoogleMapsAngularModule> {
    return {
      ngModule: GoogleMapsAngularModule,
      providers: [
        {provide: GoogleMapsAngularService, useValue: config }
      ]
    };
  }
}
