import {TestBed, inject} from '@angular/core/testing';

import {MarzetzDialogService} from './marzetz-dialog.service';

describe('MarzetzDialogService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [MarzetzDialogService]
        });
    });

    it('should be created', inject([MarzetzDialogService], (service: MarzetzDialogService) => {
        expect(service).toBeTruthy();
    }));
});
