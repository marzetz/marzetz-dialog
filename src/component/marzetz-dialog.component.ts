import {MarzetzDialogService} from '../service/marzetz-dialog.service';

export enum ClosingTrigger {
    overlay = 1,
    icon
}

import {OnInit, Component, ComponentFactoryResolver, ViewChild, ViewContainerRef, Inject} from '@angular/core';
import {MarzetzDialogInternal} from '../utility/marzetz-dialog.internal';
import {MARZETZ_DIALOG_OPTIONS_KEYS} from '../utility/marzetz-dialog.options';

@Component({
    selector: 'app-marzetz-dialog',
    templateUrl: './marzetz-dialog.component.html',
    styleUrls: ['./marzetz-dialog.component.css']
})
export class MarzetzDialogComponent implements OnInit {
    public closingTrigger = ClosingTrigger;
    public dialogSettings: MarzetzDialogInternal;

    constructor(private marzetzDialogService: MarzetzDialogService,
                private cfr: ComponentFactoryResolver) {
    }

    /**
     * Get ViewContainerRef of #dynamicTemplate, to inject dynamic component in exchange of a ng-template;
     */
    @ViewChild('dynamicTemplate', {
        read: ViewContainerRef
    }) dynamicTemplate: ViewContainerRef;

    // @TODO: Maybe first two cases won't be necessary, check this;
    /**
     * This method closes component from inside or from child component (default case);
     */
    public close(trigger?: ClosingTrigger) {
        switch (trigger) {
            case this.closingTrigger.overlay:
                this.marzetzDialogService.close(this.dialogSettings._index);
                break;
            case this.closingTrigger.icon:
                this.marzetzDialogService.close(this.dialogSettings._index);
                break;
            default:
                this.marzetzDialogService.close(this.dialogSettings._index);
        }
    }

    ngOnInit() {
        this.resolveOptions();
    }

    /**
     * This method resolves some dialog options;
     */
    private resolveOptions() {
        if (this.dialogSettings.options[MARZETZ_DIALOG_OPTIONS_KEYS.customComponent]) {
            this.injectCustomComponent(this.dialogSettings.options[MARZETZ_DIALOG_OPTIONS_KEYS.customComponent]);
        }
    }

    /**
     * This method injects custom component if it was passed in dialog options;
     */
    private injectCustomComponent(component: any) {
        const _cfr = this.cfr.resolveComponentFactory(component);
        this.dynamicTemplate.clear();
        this.dynamicTemplate.createComponent(_cfr);
    }
}
