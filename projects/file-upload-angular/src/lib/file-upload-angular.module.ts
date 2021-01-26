import { NgModule } from '@angular/core';
import { FileUploadAngularComponent } from './file-upload-angular.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FileUploadAngularComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [FileUploadAngularComponent]
})
export class FileUploadAngularModule { }
