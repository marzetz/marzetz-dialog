import {Pipe, PipeTransform} from '@angular/core';
import {MarzetzDialogInternal} from '../utility/marzetz-dialog.internal';

@Pipe({
    name: 'marzetzDialogInternals'
})
export class MarzetzDialogInternalsPipe implements PipeTransform {

    /**
     * This method looks for changes in dialog options list, it returns property `change`=true if change occurs and new options array (result property);
     *
     * @param {MarzetzDialogInternal[]} haystack
     * @param {MarzetzDialogInternal} needle
     * @returns {{change: boolean; result: MarzetzDialogInternal[]}}
     */
    transform(haystack: MarzetzDialogInternal[], needle: MarzetzDialogInternal): {change: boolean, result: MarzetzDialogInternal[]} {
        let change = false;
        const result = haystack.map((one) => {
            if (one._index === needle._index) {
                one = needle;
                change = true;
            }
            return one;
        });

        return {result: result, change: change};
    }

}
