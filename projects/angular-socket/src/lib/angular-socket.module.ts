import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { AngularSocketComponent } from './angular-socket.component';
import { AngularSocketService } from './angular-socket.service';

export function SocketFactory(config: any) {
  return new AngularSocketService(config);
}
export const SOCKET_CONFIG_TOKEN = new InjectionToken<any>(
  '__SOCKET_IO_CONFIG__'
);
@NgModule({
  imports:      [ CommonModule ],
  declarations: [ AngularSocketComponent ],
  exports:      [ AngularSocketComponent ]
})
export class AngularSocketModule {
  static forRoot(config: any): ModuleWithProviders<AngularSocketModule> {
    return {
      ngModule: AngularSocketModule,
      providers: [
        { provide: SOCKET_CONFIG_TOKEN, useValue: config },
        {
          provide: AngularSocketService,
          useFactory: SocketFactory,
          deps: [SOCKET_CONFIG_TOKEN],
        },
      ],
    };
  }
}
