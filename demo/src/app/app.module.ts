import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {MarzetzDialogModule} from "marzetz-dialog";
import {CustomDialogComponent} from './custom-dialog/custom-dialog.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
    declarations: [
        AppComponent,
        CustomDialogComponent
    ],
    imports: [
        BrowserModule,
        MarzetzDialogModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [CustomDialogComponent]
})
export class AppModule {
}
