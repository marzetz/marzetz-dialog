import {TestBed, inject} from '@angular/core/testing';

import {MarzetzDialogObservablesService} from './marzetz-dialog-observables.service';

describe('MarzetzDialogObservablesService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [MarzetzDialogObservablesService]
        });
    });

    it('should be created', inject([MarzetzDialogObservablesService], (service: MarzetzDialogObservablesService) => {
        expect(service).toBeTruthy();
    }));
});
