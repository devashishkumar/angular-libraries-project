import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { SocketIoNgxComponent } from './socket-io-ngx.component';
import { SocketIoNgxService } from './socket-io-ngx.service';

export function SocketFactory(config: any) {
  return new SocketIoNgxService(config);
}
export const SOCKET_CONFIG_TOKEN = new InjectionToken<any>(
  '__SOCKET_IO_CONFIG__'
);

@NgModule({
  declarations: [SocketIoNgxComponent],
  imports: [
  ],
  exports: [SocketIoNgxComponent]
})
export class SocketIoNgxModule {
  static forRoot(config: any): ModuleWithProviders<SocketIoNgxModule> {
    return {
      ngModule: SocketIoNgxModule,
      providers: [
        { provide: SOCKET_CONFIG_TOKEN, useValue: config },
        {
          provide: SocketIoNgxService,
          useFactory: SocketFactory,
          deps: [SOCKET_CONFIG_TOKEN],
        },
      ],
    };
  }
}
