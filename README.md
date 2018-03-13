# MarzetzDialog

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Build Status](https://travis-ci.org/marzetz/marzetz-dialog.svg?branch=master)](https://travis-ci.org/marzetz/marzetz-dialog)

**MarzetzDialog** can show custom popups in any Angular app.

### Built with Angular 5.2.8

## Demo

![demo](https://raw.githubusercontent.com/marzetz/marzetz-dialog/master/demo/img/demo.gif)

## Installation

```shell
npm install --save marzetz-dialog
```

## Getting Started

Import the `MarzetzDialogModule` in your root application module:

```typescript
import {NgModule} from '@angular/core';
import {MarzetzDialogModule} from 'marzetz-dialog';

@NgModule({
	imports: [
    	// ...
        MarzetzDialogModule
    ],
	// ...
})
export class AppModule {}
```


Add the `appMarzetzDialog` directive on one of the main containers inside your app:

```typescript
import {Component} from '@angular/core';

@Component({
    selector: 'app-main',
    template: `
        <div appMarzetzDialog></div>
    `
})
```

Init your dialog:

```typescript
import {Component, OnInit} from '@angular/core';
import {MarzetzDialogInternal, MarzetzDialogService, MarzetzDialogOptions} from 'marzetz-dialog';
import {SomeComponent} from './component';

@Component({
    selector: 'app-main',
    template: `
        <div appMarzetzDialog></div>
    `
})

export class AppMain implements OnInit {
    public dialogOne: MarzetzDialogInternal;
    
    private dialogOneOptions: MarzetzDialogOptions = {
        customComponent: SomeComponent,
        customBodyClass: 'custom-class-for-body'
    };
    
    constructor(private marzetzDialogService: MarzetzDialogService) {
    }
    
    ngOnInit() {
        this.dialogOne = this.marzetzDialogService.init(this.dialogOneOptions)
    }
}
```

Open and close your dialog:

```typescript
import {Component, OnInit} from '@angular/core';
import {MarzetzDialogInternal, MarzetzDialogService, MarzetzDialogOptions} from 'marzetz-dialog';
import {SomeComponent} from './component';

@Component({
    selector: 'app-main',
    template: `
        <div appMarzetzDialog>
            <button (click)="openMyDialog()">Open dialog</button>
        </div>
    `
})

export class AppMain implements OnInit {
    public dialogOne: MarzetzDialogInternal;
    
    private dialogOneOptions: MarzetzDialogOptions = {
        customComponent: SomeComponent,
        customBodyClass: 'custom-class-for-body'
    };
    
    constructor(private marzetzDialogService: MarzetzDialogService) {
    }
    
    ngOnInit() {
        this.dialogOne = this.marzetzDialogService.init(this.dialogOneOptions)
    }
    
    public openMyDialog() {
        this.marzetzDialogService.open(this.dialogOne._index);
    }
    
    public closeMyDialog() {
        this.marzetzDialogService.close(this.dialogOne._index);
    }
}
```

## Options and available methods

* `MarzetzDialogService` methods:

Method | Description
--- | ---
`init(options?: MarzetzDialogOptions)` | Inits new dialog and then returns its `MarzetzDialogInternal` setup. Argument `options` is not required.
`open(index: number)` | Opens dialog if it was initiated earlier. Argument `index` is required, it can be received from `MarzetzDialogInternal` object.
`close(index: number)` | Closes dialog. Argument `index` is mandatory.
`closeAll()` | Closes all opened dialogs.
`destroy(index: number)` | Destroys dialog. Argument `index` is mandatory.
`destroyAll()` | Destroys all dialogs.

* `MarzetzDialogOptions`:

You can override dialog defaults with your own options. It can be done by passing argument of type `MarzetzDialogOptions` into `MarzetzDialogService` `init` method. 

Option | Type | Default | Desctiption
--- | --- | --- | ---
`addBodyClass` | `boolean` | `true` | If `true` specified or default class will be added to html `body` element when popup is opened. This class is removed while dialog is being closed.
`customBodyClass` | `string` | `'marzetz-dialog-opened'` | The css class that would be added to html `body` element whilst dialog is being opened.
`customComponent` | `any` (your component) | `null` | Custom component to inject into dialog on init. You should also add it to `entryComponents` in your main module.
`customContent` | `string` (html) | `null` | The content to show inside dialog. Use it if you want to create simple alert/info popup.
`animation` | `string` | `'normal'` | The animation that will be applied on dialog. Supported values: `'normal'`, `'bounceIn'` and `'error'`.

## Credits

- Inspired by angularjs ngDialog module: [https://github.com/likeastore/ngDialog](https://github.com/likeastore/ngDialog)


## TODO

- Unit & E2E test
- Add more animations

## LICENSE

This project is licensed under the MIT license. [LICENSE](https://github.com/marzetz/marzetz-dialog/blob/master/LICENSE)