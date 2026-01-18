# Angular Component Libraries

A collection of production-ready Angular packages for enhanced mapping and project visualization.

---

## 📦 Package 1: google-maps-angular

Interactive Google Maps integration for Angular applications with customizable markers and click event handlers.

### Installation

```bash
npm install google-maps-angular
```

### Module Setup

Configure the module in your `AppModule`:

```typescript
import { GoogleMapsAngularModule } from 'google-maps-angular';

@NgModule({
  imports: [
    GoogleMapsAngularModule.forRoot({
      googleMapsKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ]
})
export class AppModule { }
```

### Component Usage

```html
<ng-google-maps
  [latLong]="latLong"
  [markers]="markers"
  [googleMapDefaultIcon]="googleMapDefaultIcon"
  (markerClicked)="onMarkerClicked($event)">
</ng-google-maps>
```

### Configuration

**Center Location (latLong):**
```typescript
latLong = {
  lat: 40.7128,      // latitude coordinate
  long: -74.0060     // longitude coordinate
};
```

**Markers:**
```typescript
markers = [
  {
    lat: 40.7128,
    long: -74.0060,
    labelDetails: {
      text: 'Location Label',     // Required
      fontWeight: 'normal',
      fontSize: '12px',
      color: 'white'
    }
  }
];
```

### API Reference

#### Inputs

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `latLong` | Object | Yes | Map center coordinates with `lat` and `long` properties |
| `markers` | Array | No | Array of marker objects to display on map |
| `googleMapDefaultIcon` | String | No | Custom marker icon URL |

#### Outputs

| Event | Description |
|-------|-------------|
| `markerClicked` | Fired when user clicks a marker; emits the marker object |

---

## 📊 Package 2: gantt-chart-angular

Gantt chart visualization library for Angular to display project timelines and task dependencies.

### Prerequisites

Add the Google Charts library to `index.html`:

```html
<script src="https://www.gstatic.com/charts/loader.js"></script>
```

### Installation

```bash
npm install gantt-chart-angular
```

### Module Setup

Configure the module in your `AppModule`:

```typescript
import { GanttChartAngularModule } from 'gantt-chart-angular';

@NgModule({
  imports: [GanttChartAngularModule]
})
export class AppModule { }
```

### Component Usage

```html
<ng-gantt-chart
  [config]="ganttConfig"
  (onClick)="onRowClicked($event)">
</ng-gantt-chart>
```

### Configuration

```typescript
ganttConfig = {
  columns: [
    { type: 'string', name: 'ID', field: 'id' },
    { type: 'string', name: 'Name', field: 'name' },
    { type: 'date', name: 'Start Date', field: 'startDate' },
    { type: 'date', name: 'End Date', field: 'endDate' },
    { type: 'number', name: 'Duration', field: 'duration' },
    { type: 'number', name: 'Completion %', field: 'percentComplete' },
    { type: 'string', name: 'Status', field: 'status' }
  ],
  data: [
    {
      id: 'setup',
      name: 'Angular Setup',
      startDate: new Date(2021, 2, 10),
      endDate: new Date(2021, 2, 11),
      duration: 2,
      percentComplete: 100,
      status: 'Complete'
    },
    {
      id: 'dev-login',
      name: 'Login Feature',
      startDate: new Date(2021, 2, 13),
      endDate: new Date(2021, 2, 14),
      duration: 2,
      percentComplete: 0,
      status: 'Pending'
    },
    {
      id: 'test-login',
      name: 'Login Testing',
      startDate: new Date(2021, 2, 16),
      endDate: new Date(2021, 2, 17),
      duration: 2,
      percentComplete: 0,
      status: 'Pending'
    },
    {
      id: 'deploy',
      name: 'Production Deployment',
      startDate: new Date(2021, 2, 18),
      endDate: new Date(2021, 2, 18),
      duration: 1,
      percentComplete: 0,
      status: 'Pending'
    }
  ],
  options: {
    height: 275,
    gantt: {
      criticalPathEnabled: false,
      innerGridHorizLine: {
        stroke: '#ffe0b2',
        strokeWidth: 2
      },
      innerGridTrack: {
        fill: '#fff3e0'
      },
      innerGridDarkTrack: {
        fill: '#ffcc80'
      }
    }
  }
};
```

### API Reference

#### Inputs

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `config` | Object | Yes | Configuration object containing columns, data, and options |

#### Outputs

| Event | Description |
|-------|-------------|
| `onClick` | Fired when user clicks a row; emits the row data |

---

## 🚀 Publishing Custom Packages

To create and publish an Angular library to npm:

```bash
# Generate a new library
ng generate library my-lib

# Build the library
ng build my-lib

# Navigate to the build directory
cd dist/my-lib

# Publish to npm (public access)
npm publish --access public
```

Ensure your `package.json` contains correct metadata before publishing.
