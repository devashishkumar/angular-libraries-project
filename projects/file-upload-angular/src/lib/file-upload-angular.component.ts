import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-file-upload',
  templateUrl: './file-upload-angular.component.html',
  styleUrls: ['./file-upload-angular.component.css']
})
export class FileUploadAngularComponent implements OnInit {

  divId = '';
  @Input() multiple = false;
  @Input() config: any = {};
  @Input() buttonText = 'Select Files';
  @Output() fileUploadEmitter = new EventEmitter();
  @Output() filesEmitter = new EventEmitter();
  allowedFiles = [];
  notAllowedFiles = [];
  filesDialog = false;
  selectAll = true;

  constructor() { }

  ngOnInit(): void {
    this.divId = this.generateDynamicString(8);
  }

  /**
   * open/close files selection dialog
   * @param val boolean
   */
  openCloseFilesDialog(val: boolean) {
    this.filesDialog = val;
    if (!val) {
      this.filesEmitter.emit({
        validFiles: this.filterSelectedFiles(),
        invalidFiles: this.notAllowedFiles,
      });
    }
  }

  /**
   * return selected files list
   */
  filterSelectedFiles() {
    return this.allowedFiles.filter(e => e.selected === true);
  }

  /**
   * select/unselect all checkboxes
   * @param data object
   */
  selectedAll(data) {
    if (this.allowedFiles && this.allowedFiles.length > 0) {
      this.allowedFiles.forEach(e => {
        e.selected = data;
      });
    }
  }

  /**
   * remove valid files
   * @param index number
   */
  removeValidFiles(index: any) {
    if (index > -1) {
      this.allowedFiles.splice(index, 1);
    }
    this.filesEmitter.emit({
      validFiles: this.filterSelectedFiles(),
      invalidFiles: this.notAllowedFiles,
    });
  }

  /**
   * remove file from invalid files
   * @param index number
   */
  removeInvalidFiles(index: any) {
    if (index > -1) {
      this.notAllowedFiles.splice(index, 1);
    }
    this.filesEmitter.emit({
      validFiles: this.filterSelectedFiles(),
      invalidFiles: this.notAllowedFiles,
    });
  }
  /**
   * trigger input type file control on button click
   */
  triggerFilesControl() {
    const element = document.getElementById(this.divId);
    if (element) {
      element.click();
    }
  }

  /**
   * generate random string as per passed number length
   * @param length number
   */
  generateDynamicString(length) {
    let result = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * charactersLength)
      );
    }
    return result;
  }

  /**
   * reset valid/invalid files property
   */
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

  /**
   * trigger when user select files using file control
   * @param event object
   */
  onChange(event: any) {
    this.notAllowedFiles = [];
    let fileList: FileList;
    this.allowedFiles = [];

    if (event.type === 'drop') {
      fileList = event.dataTransfer.files;
    } else {
      fileList = event.target.files || event.srcElement.files;
    }

    for (let i = 0; i < fileList.length; i++) {
      // const currentFileExt = fileExtRegExp.exec(fileList[i].name)[1].toLowerCase(); // Get file extension.
      const currentFileName = fileList[i].name.split('.');
      let currentFileExt = '';
      if (currentFileName && currentFileName.length > 0) {
        currentFileExt = currentFileName[currentFileName.length - 1];
      }
      const isFormatValid = this.config.formatsAllowed ? this.config.formatsAllowed.includes(
        currentFileExt
      ) : true;
      const fSize = this.convertSize(fileList[i].size);
      const isSizeValid = fSize <= this.config.maxSize;

      // Check whether current file format and size is correct as specified in the configurations.
      if (isFormatValid && isSizeValid) {
        const currentFile = fileList[i];
        currentFile['fileSize'] = this.convertSize(fileList[i].size);
        currentFile['selected'] = true;
        this.allowedFiles.push(fileList[i]);
      } else {
        this.notAllowedFiles.push({
          fileName: fileList[i].name,
          fileSize: this.convertSize(fileList[i].size),
          errorMsg: !isFormatValid ? 'Invalid format' : 'Invalid size',
        });
      }
    }

    this.filesEmitter.emit({
      validFiles: this.allowedFiles,
      invalidFiles: this.notAllowedFiles,
    });
  }

  /**
   * create files data to upload to API
   */
  createFormData() {
    const formData = new FormData();
    const validFiles = this.filterSelectedFiles();
    for (let i = 0; i < validFiles.length; i++) {
      formData.append('files', validFiles[i]);
    }
    return formData;
  }

  /**
   * service call
   */
  fileUpload() {
    const formData = this.createFormData();
    fetch(this.config.uploadConfig.url, {
      method: this.config.uploadConfig.method,
      body: formData,
      headers: {
        'Content-Type': 'application/json',
        Bearer: this.config.uploadConfig.userRef,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        this.fileUploadEmitter.emit({ success: true, response: result });
      })
      .catch((error) => {
        // this.$emit("fileUploadEmitter", { success: false, response: error });
        this.fileUploadEmitter.emit({ success: false, response: error });
      });
  }

}
