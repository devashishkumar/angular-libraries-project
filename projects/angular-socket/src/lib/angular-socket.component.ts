import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-angular-socket',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      angular-socket works!
    </p>
  `,
  styles: [
  ]
})
export class AngularSocketComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
