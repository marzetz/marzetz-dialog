import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {MarzetzDialogInternal} from '../utility/marzetz-dialog.internal';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {MarzetzDialogInternalsPipe} from '../pipe/marzetz-dialog-internals.pipe';

@Injectable()
export class MarzetzDialogObservablesService {
    private dialogsInternalList: Array<MarzetzDialogInternal> = [];

    private marzetzDialogObserver: BehaviorSubject<Array<MarzetzDialogInternal>> = new BehaviorSubject(null);
    private marzetzDialogObservable: Observable<Array<MarzetzDialogInternal>> = this.marzetzDialogObserver.asObservable();

    constructor(private marzetzDialogInternalsPipe: MarzetzDialogInternalsPipe) {
    }

    /**
     * This method returns marzetzDialogObservable;
     */
    public getMarzetzDialogObservable(): Observable<Array<MarzetzDialogInternal>> {
        return this.marzetzDialogObservable;
    }

    /**
     * This method updates marzetzDialogObservable and pushes/updates dialog options into/in dialogInternalList;
     */
    public updateMarzetzDialogObservable(internal: MarzetzDialogInternal): MarzetzDialogInternal {
        // check if change occurs
        const change = this.marzetzDialogInternalsPipe.transform(this.dialogsInternalList, internal);

        if (change.change) {
            // update existing one
            this.dialogsInternalList = change.result;
        } else {
            // create new
            this.dialogsInternalList.push(internal);
        }

        this.marzetzDialogObserver.next(this.dialogsInternalList);

        return internal;
    }

    /**
     * This method returns specific dialog options;
     */
    public getMarzetzDialogInternal(index: number): MarzetzDialogInternal {
        return this.dialogsInternalList[index];
    }

    /**
     * This method returns whole array of dialog options;
     */
    public getMarzetzDialogInternals(): MarzetzDialogInternal[] {
        return this.dialogsInternalList;
    }
}
