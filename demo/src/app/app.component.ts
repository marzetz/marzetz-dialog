import {Component, OnInit} from '@angular/core';
import {MarzetzDialogInternal, MarzetzDialogService} from "marzetz-dialog";
import {CustomDialogComponent} from "./custom-dialog/custom-dialog.component";

export const DIALOGS_OPTIONS = {
    simple: {
        customContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet egestas dolor. In dapibus tellus sed enim porttitor, vitae ullamcorper sapien lacinia. Phasellus ornare semper urna ac euismod. Maecenas at vestibulum ante'
    },
    custom: {
        customComponent: CustomDialogComponent
    },
    error: {
        animation: 'error',
        customContent: 'Error occurred, please try again later'
    }
};

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    private dialogSimple: MarzetzDialogInternal;
    private dialogCustom: MarzetzDialogInternal;
    private dialogError: MarzetzDialogInternal;

    constructor(private marzetzDialogService: MarzetzDialogService) {
    }

    public initDialogs() {
        this.dialogSimple = this.marzetzDialogService.init(DIALOGS_OPTIONS.simple);
        this.dialogCustom = this.marzetzDialogService.init(DIALOGS_OPTIONS.custom);
        this.dialogError = this.marzetzDialogService.init(DIALOGS_OPTIONS.error);
    }

    public openSimple() {
        this.marzetzDialogService.open(this.dialogSimple._index);
    }

    public openCustom() {
        this.marzetzDialogService.open(this.dialogCustom._index);
    }

    public openError() {
        this.marzetzDialogService.open(this.dialogError._index);
    }

    ngOnInit() {
        this.initDialogs();
    }
}
