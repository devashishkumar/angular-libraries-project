import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-socket-io-ngx',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      socket-io-ngx works!
    </p>
  `,
  styles: [
  ]
})
export class SocketIoNgxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
