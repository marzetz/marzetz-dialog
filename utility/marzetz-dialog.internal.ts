import {MarzetzDialogOptions} from './marzetz-dialog.options';

export interface MarzetzDialogInternal {
    _init?: boolean;
    _index?: number;
    _opened?: boolean;
    _destroy?: boolean;
    options?: MarzetzDialogOptions;
}

export const MARZETZ_DIALOG_INTERNAL_DEFAULTS = {
    _init: true,
    _index: 0,
    _opened: false,
    _destroy: false,
    options: null
};

export class MarzetzDialogInternal implements MarzetzDialogInternal {
    public _init?: boolean;
    public _index?: number;
    public _opened?: boolean;
    public _destroy?: boolean;
    public options?: MarzetzDialogOptions;

    constructor(internal?: MarzetzDialogInternal) {
        for (const option in MARZETZ_DIALOG_INTERNAL_DEFAULTS) {
            if (MARZETZ_DIALOG_INTERNAL_DEFAULTS.hasOwnProperty(option)) {
                if (typeof internal !== 'undefined') {
                    this[option] = internal.hasOwnProperty(option) ? internal[option] : MARZETZ_DIALOG_INTERNAL_DEFAULTS[option];
                } else {
                    this[option] = MARZETZ_DIALOG_INTERNAL_DEFAULTS[option];
                }
            }
        }
    }
}
