import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'file-upload-angular',
  templateUrl: './file-upload-angular.component.html',
  styleUrls: ['./file-upload-angular.component.css']
})
export class FileUploadAngularComponent implements OnInit {

  divId = '';
  @Input() multiple: boolean = false;
  @Input() config: any = {};
  @Output() fileUploadEmitter = new EventEmitter();
  @Output() filesEmitter = new EventEmitter();
  allowedFiles = [];
  notAllowedFiles = [];

  constructor() { }

  ngOnInit(): void {
    this.divId = this.generateDynamicString(8);
  }

  removeValidFiles(index: any) {
    if (index > -1) {
      this.allowedFiles.splice(index, 1);
    }
    this.filesEmitter.emit({
      validFiles: this.allowedFiles,
      invalidFiles: this.notAllowedFiles,
    });
  }
  removeInvalidFiles(index: any) {
    if (index > -1) {
      this.notAllowedFiles.splice(index, 1);
    }
    this.filesEmitter.emit({
      validFiles: this.allowedFiles,
      invalidFiles: this.notAllowedFiles,
    });
  }
  triggerFilesControl() {
    const element = document.getElementById(this.divId);
    if (element) {
      element.click();
    }
  }
  generateDynamicString(length) {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * charactersLength)
      );
    }
    return result;
  }
  resetFiles() {
    this.allowedFiles = [];
    this.notAllowedFiles = [];
    this.filesEmitter.emit({
      validFiles: this.allowedFiles,
      invalidFiles: this.notAllowedFiles,
    });
  }

  convertSize(fileSize: number): string {
    //   return fileSize < 1024000
    //     ? (fileSize / 1024).toFixed(2) + " KB"
    //     : (fileSize / 1024000).toFixed(2) + " MB";
    return (fileSize / 1024000).toFixed(2);
  }

  // When user selects files.
  onChange(event: any) {
    this.notAllowedFiles = [];
    let fileList: FileList;
    this.allowedFiles = [];

    if (event.type === "drop") {
      fileList = event.dataTransfer.files;
    } else {
      fileList = event.target.files || event.srcElement.files;
    }

    for (let i = 0; i < fileList.length; i++) {
      // const currentFileExt = fileExtRegExp.exec(fileList[i].name)[1].toLowerCase(); // Get file extension.
      const currentFileName = fileList[i].name.split(".");
      let currentFileExt = "";
      if (currentFileName && currentFileName.length > 0) {
        currentFileExt = currentFileName[currentFileName.length - 1];
      }
      const isFormatValid = this.config.formatsAllowed.includes(
        currentFileExt
      );
      const fSize = this.convertSize(fileList[i].size);
      const isSizeValid = fSize <= this.config.maxSize;

      // Check whether current file format and size is correct as specified in the configurations.
      if (isFormatValid && isSizeValid) {
        this.allowedFiles.push(fileList[i]);
      } else {
        this.notAllowedFiles.push({
          fileName: fileList[i].name,
          fileSize: this.convertSize(fileList[i].size),
          errorMsg: !isFormatValid ? "Invalid format" : "Invalid size",
        });
      }
    }

    this.filesEmitter.emit({
      validFiles: this.allowedFiles,
      invalidFiles: this.notAllowedFiles,
    });
  }
  createFormData() {
    const formData = new FormData();
    for (let i = 0; i < this.allowedFiles.length; i++) {
      formData.append("files", this.allowedFiles[i]);
    }
    return formData;
  }
  fileUpload() {
    const formData = this.createFormData();
    fetch(this.config.uploadConfig.url, {
      method: this.config.uploadConfig.method,
      body: formData,
      headers: {
        "Content-Type": "application/json",
        Bearer: this.config.uploadConfig.userRef,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        this.fileUploadEmitter.emit({success: true, response: result});
      })
      .catch((error) => {
        // this.$emit("fileUploadEmitter", { success: false, response: error });
        this.fileUploadEmitter.emit({success: false, response: error});
      });
  }

}
