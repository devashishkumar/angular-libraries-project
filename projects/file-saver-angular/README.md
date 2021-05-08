### Documentation

This library is used to export data to csv/excel

### Installation

```sh
npm install file-saver-angular
```

### import FileSaverAngularService in your component and add this service in providers

```sh
providers: [FileSaverAngularService]
```

### create service object

```sh
constructor(private fileSaverServiceObj: FileSaverAngularService) { }
```

### How to export data in csv. use exportToCsv() method using service object like this

```sh
this.fileSaverServiceObj.exportToCsv(
      [
        {
          Language: 'Python',
          Framework: 'Django'
        }, {
          Language: 'PHP',
          Framework: 'Laravel'
        }
      ], 'test.csv'
    );
```

### How to export data in excel. use exportToExcel() method using service object like this

```sh
this.fileSaverServiceObj.exportToExcel(
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
```

```sh
1. first parameter is a data array 
2. second parameter is a file name
```

### LICENSE
MIT

### Author
Ashish K