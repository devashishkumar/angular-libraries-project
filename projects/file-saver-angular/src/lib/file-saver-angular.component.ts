import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-file-saver-angular',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      file-saver-angular works!
    </p>
  `,
  styles: [
  ]
})
export class FileSaverAngularComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
