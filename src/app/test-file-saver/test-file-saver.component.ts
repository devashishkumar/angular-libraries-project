import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FileSaverAngularService } from 'projects/file-saver-angular/src/public-api';

@Component({
  selector: 'app-test-file-saver',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './test-file-saver.component.html',
  styleUrls: ['./test-file-saver.component.css'],
  providers: [FileSaverAngularService]
})
export class TestFileSaverComponent implements OnInit {

  constructor(private fileSaverServiceObj: FileSaverAngularService) { }

  ngOnInit(): void {
    this.fileSaverServiceObj.exportToCsv(
      [
        {
          Language: 'Python',
          Framework: 'Django'
        }, {
          Language: 'PHP',
          Framework: 'Laravel'
        }
      ], 'test.xls'
    );
  }

}
