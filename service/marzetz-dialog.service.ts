import {Inject, Injectable} from '@angular/core';
import {MarzetzDialogOptions} from '../utility/marzetz-dialog.options';
import {MarzetzDialogObservablesService} from './marzetz-dialog-observables.service';
import {MarzetzDialogInternal} from '../utility/marzetz-dialog.internal';
import {DOCUMENT} from '@angular/common';

@Injectable()
export class MarzetzDialogService {
    private openedNumber: number = 0;

    constructor(private marzetzDialogObservablesService: MarzetzDialogObservablesService,
                @Inject(DOCUMENT) private document: Document) {
    }

    /**
     * This method injects dialog, when argument is an object or undefined. It returns instance of MarzetzDialogInternal with `_index` property;
     *
     * @param {MarzetzDialogOptions} options
     * @returns {MarzetzDialogInternal}
     */
    public init(options?: MarzetzDialogOptions): MarzetzDialogInternal {
        options = new MarzetzDialogOptions(options);
        const internal = new MarzetzDialogInternal({_opened: false, _index: this.openedNumber, options: options});
        this.openedNumber++;

        return this.marzetzDialogObservablesService.updateMarzetzDialogObservable(internal);
    }

    /**
     * This method opens dialog which was already injected;
     *
     * @param {MarzetzDialogOptions | number} index
     * @returns {MarzetzDialogInternal | void}
     */
    public open(index: number): MarzetzDialogInternal {
        if (this.openedNumber < index) {
            console.error('MarzetzDialogService: Dialog not injected.');
            return;
        }

        const updateInternal = this.marzetzDialogObservablesService.getMarzetzDialogInternal(index);
        updateInternal._opened = true;

        if (updateInternal.options.addBodyClass &&
            !updateInternal._destroy)
            this.document.body.classList.add(updateInternal.options.customBodyClass);

        return this.marzetzDialogObservablesService.updateMarzetzDialogObservable(updateInternal);
    }

    /**
     * This method closes dialog which was initiated with specific `_index` argument;
     *
     * @param {number} index
     * @returns {MarzetzDialogInternal}
     */
    public close(index: number): MarzetzDialogInternal {
        if (typeof index !== 'number') {
            console.error('MarzetzDialogService: Argument should be a number.');
            return;
        }

        const internal = this.marzetzDialogObservablesService.getMarzetzDialogInternal(index);
        internal._opened = false;

        if (internal.options.addBodyClass)
            this.document.body.classList.remove(internal.options.customBodyClass);

        return this.marzetzDialogObservablesService.updateMarzetzDialogObservable(internal);
    }

    /**
     * This method closes all dialogs.
     *
     * @returns {MarzetzDialogInternal[]}
     */
    public closeAll(): MarzetzDialogInternal[] {
        const internals = this.marzetzDialogObservablesService.getMarzetzDialogInternals();

        for (const internal in internals) {
            if (internals.hasOwnProperty(internal)) {
                this.close(internals[internal]._index);
            }
        }

        return internals;
    }

    /**
     * This method destroys dialog which was initiated with specific `_index` argument;
     *
     * @param {number} index
     * @returns {MarzetzDialogInternal}
     */
    public destroy(index: number): MarzetzDialogInternal {
        if (typeof index !== 'number') {
            console.error('MarzetzDialogService: Argument should be a number.');
            return;
        }

        this.close(index);
        const internal = this.marzetzDialogObservablesService.getMarzetzDialogInternal(index);
        internal._destroy = true;

        return this.marzetzDialogObservablesService.updateMarzetzDialogObservable(internal);
    }

    /**
     * This method destroys all dialogs;
     *
     * @returns {MarzetzDialogInternal[]}
     */
    public destroyAll(): MarzetzDialogInternal[] {
        const internals = this.marzetzDialogObservablesService.getMarzetzDialogInternals();

        for (const internal in internals) {
            if (internals.hasOwnProperty(internal)) {
                this.destroy(internals[internal]._index);
            }
        }

        return internals;
    }
}
