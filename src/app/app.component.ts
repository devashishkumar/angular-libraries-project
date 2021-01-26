import { Component, OnInit, ViewChild } from '@angular/core';
import { FileUploadAngularComponent } from 'projects/file-upload-angular/src/lib/file-upload-angular.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ashish-gmap-library';
  googleMapDefaultIcon = 'assets/images/map_pointer.svg';
  googleMapActiveIcon = 'assets/images/map_pointer_active.svg';
  // lat: any = 28.5636;
  // long: any = 77.3726;
  // noida sector 49 lat/long
  latLong: any = {
    lat: 28.5636,
    long: 77.3726
  };
  // kanpur govind nagar lat/long
  // latLong: any = {
  //   lat: 26.4492,
  //   long: 80.3094
  // };

  markers = [
    {
      lat: 28.5661,
      long: 77.3698,
      labelDetails: {
        text: 'Shiv Mandir Barola',
        fontWeight: 'normal',
        fontSize: '12px',
        color: 'white'
      }
    },
    {
      lat: 28.5666,
      long: 77.3664,
      labelDetails: {
        text: 'Budh Bazaar',
        fontWeight: 'normal',
        fontSize: '12px',
        color: 'white'
      }
    },
    {
      lat: 28.5636,
      long: 77.3656,
      labelDetails: {
        text: 'Prayag Hospital',
        fontWeight: 'normal',
        fontSize: '12px',
        color: 'white'
      }
    },
    {
      lat: 28.5579,
      long: 77.3726,
      labelDetails: {
        text: 'Shri Ram Hospital',
        fontWeight: 'normal',
        fontSize: '12px',
        color: 'white'
      }
    },
    {
      lat: 28.5640,
      long: 77.3780,
      labelDetails: {
        text: 'Post Office Barola',
        fontWeight: 'normal',
        fontSize: '12px',
        color: 'white'
      }
    }
  ];
  nMap: any = {};

  // file uploader
  files = [];
  config = {
    maxSize: 120,
    uploadConfig: {
      url: "test url",
      method: "POST",
      userRef: "test user",
    },
    formatsAllowed: ".jpg, .png, .mp4",
    // formatsAllowed: "",
    multipleUpload: true,
  };
  @ViewChild('fileUploader') fileUploaderObj: FileUploadAngularComponent;

  ngOnInit() {
  }

  /**
   * get data on particular marker clicked
   * @param data object
   */
  markerClicked(data) {
    console.log(data, '53');
    // alert('Please check browser console to get click marker information');
  }

  fileUploadHandler(data: any) {
    console.log(data, "36");
  }
  handleFiles(data) {
    console.log(data, "34");
    this.files = data.validFiles;
  }
  fileUpload() {
    // console.log(this.fileUploaderObj.fileUpload());
  }
}
