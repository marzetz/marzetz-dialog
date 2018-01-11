import {ModuleWithProviders, NgModule, Compiler} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MarzetzDialogService} from './service/marzetz-dialog.service';
import {MarzetzDialogObservablesService} from './service/marzetz-dialog-observables.service';
import {MarzetzDialogDirective} from './directive/marzetz-dialog.directive';
import {MarzetzDialogComponent} from './component/marzetz-dialog.component';
import {MarzetzDialogInternalsPipe} from './pipe/marzetz-dialog-internals.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        MarzetzDialogDirective,
        MarzetzDialogComponent,
        MarzetzDialogInternalsPipe
    ],
    exports: [
        MarzetzDialogDirective
    ],
    entryComponents: [
        MarzetzDialogComponent
    ],
    providers: [
        MarzetzDialogService,
        MarzetzDialogObservablesService,
        MarzetzDialogInternalsPipe
    ]
})
export class MarzetzDialogModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: MarzetzDialogModule,
            providers: [MarzetzDialogService]
        };
    }
}
