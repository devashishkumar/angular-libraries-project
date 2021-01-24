import { NgModule } from '@angular/core';
import { FileUploadAngularComponent } from './file-upload-angular.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [FileUploadAngularComponent],
  imports: [
    CommonModule
  ],
  exports: [FileUploadAngularComponent]
})
export class FileUploadAngularModule { }
