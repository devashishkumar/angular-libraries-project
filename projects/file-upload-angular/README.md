### What's new in version 1.2.0

We can pass custom text in files upload button, we can check valid/invalid files list in dialog and select which files we want to upload from the selected files list using files uploader. Demo URL attached with this version

# Angular single/multipe file uploader

Angular single/multiple file uploader. We Just need to pass configuration as an input all the work handle by uploader component based on passed configuration

## Features

- Multiple File Uploads
- Max File Size, Accepted file types validation
- differentiate valid/invalid files as per passed cofiguration
- We can passed files type what we want to upload
- Upload files on the basis of passed configuration
- Provide lot of other methods so that we can handle files as per our requirements
- Externally controllable via Angular bindings and methods

### How we use Angular file uploader in our application

## Basic Usage

```html
  <file-upload-angular
      #fileUploader
      [multiple]="false"
      [config]="config"
      [buttonText]="'Select Files'"
      (fileUploadEmitter)="fileUploadHandler($event)"
      (filesEmitter)="handleFiles($event)"
    ></file-upload-angular>
```
### config should be in below format
```
config = {
        maxSize: 10,
        uploadConfig: {
          url: "test url",
          method: "POST",
          userRef: "test user",
        },
        formatsAllowed: ".jpg, .png, .mp4"
      }
we can pass uploadConfig in case we want to upload files from uploader. fileUploadEmitter event will trigger in case success/failure with the service response. Max Size will used user to restrict files upload within provide files size. Our uploader will consider maxSize in MB. formatsAllowed will be use in case we want user to restrict file types to upload
```


| Input | Type | Purpose |
| ------ | ------ | ------ |
| buttonText: required |string | upload button name you want to display in browser, like 'Select Files' |
| multiple:required | boolean | true in case we want to upload multiple files otherwise false |
| config: required |object | File Configurations |

### Events

| Output | Purpose |
| ------ | ------ |
| fileUploadEmitter | Trigger in case we are trying to upload files using file uploader, we can upload files using component own handler as well|
| filesEmitter | Trigger every time when user select files, reset files, remove particular file with provide information number of valid/invalid files|

```html
fileUploadEmitter always return data in this format
this.fileUploadEmitter.emit({success: true, response: result});
this will work in case we are handling file upload from uploader by passing upload url in configuration.
success true means files are uploaded, false means some errors from service
```

```html
filesEmitter always return data in this format
this.filesEmitter.emit({
      validFiles: validFilesList,
      invalidFiles: invalidFilesList (in case max size exceed or invalid format),
    });
```

## Installation

```
npm install file-upload-angular --save
and import module in app.module file
```

```javascript
import { FileUploadAngularModule } from 'file-upload-angular';

imports: [
    FileUploadAngularModule
]
```

### how we use uploader component methods
```html
As we can see we are creating file uploader component object above which is 'fileUploader'. We will use this object to access file uploader methods
1. Suppose we have selected 10 files and want to remove one of them. we will use removeValidFiles() method like this.
this.fileUploaderObj.removeValidFiles(fileIndex)
2. Suppose we have selected some files to be upload and one of them are invalid like size exceed and we want to remove these files. we will use removeInvalidFiles() method like this.
this.fileUploaderObj.removeInvalidFiles(fileIndex)
Both of the above methods will return emitter with the updated count of files like this:
this.filesEmitter.emit({
      validFiles: validFilesList,
      invalidFiles: invalidFilesList (in case max size exceed or invalid format),
    });
3. We want to remove all the files we have selected, we will use
this.fileUploaderObj.resetFiles(fileIndex). This method will return emitter with updated files like this:
this.filesEmitter.emit({
      validFiles: validFilesList,
      invalidFiles: invalidFilesList (in case max size exceed or invalid format),
    });
4. Suppose we want to upload files using file uploader component, we just need to use that particular method:
this.fileUploaderObj.fileUpload()
to execute this method properly we need to pass apiUrl, method and logged in user token in the configuration. Refer to config format in the starting of our read me file

```

### [Demo](https://angularfileupload.herokuapp.com/)

### License

The MIT License
