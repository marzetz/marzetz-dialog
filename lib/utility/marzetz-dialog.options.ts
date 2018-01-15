import {Type} from '@angular/core';

export interface MarzetzDialogOptions {
    addBodyClass?: boolean;
    customBodyClass?: string;
    customComponent?: Type<object>;
    customContent?: string;
    animation?: string;
}

export const MARZETZ_DIALOG_OPTIONS_DEFAULTS = {
    addBodyClass: true,
    customBodyClass: 'marzetz-dialog-opened',
    customComponent: null,
    customContent: null,
    animation: 'normal'
};

export const MARZETZ_DIALOG_OPTIONS_KEYS = {
    addBodyClass: 'addBodyClass',
    customBodyClass: 'customBodyClass',
    customComponent: 'customComponent',
    customContent: 'customContent',
    animation: 'animation'
};

export class MarzetzDialogOptions implements MarzetzDialogOptions {
    constructor(options?: MarzetzDialogOptions) {
        for (const option in MARZETZ_DIALOG_OPTIONS_DEFAULTS) {
            if (MARZETZ_DIALOG_OPTIONS_DEFAULTS.hasOwnProperty(option)) {
                if (typeof options !== 'undefined') {
                    this[option] = options.hasOwnProperty(option) ? options[option] : MARZETZ_DIALOG_OPTIONS_DEFAULTS[option];
                } else {
                    this[option] = MARZETZ_DIALOG_OPTIONS_DEFAULTS[option];
                }
            }
        }
    }
}
