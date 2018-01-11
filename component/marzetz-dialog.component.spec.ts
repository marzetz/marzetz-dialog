import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MarzetzDialogComponent} from './marzetz-dialog.component';

describe('MarzetzDialogComponent', () => {
    let component: MarzetzDialogComponent;
    let fixture: ComponentFixture<MarzetzDialogComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MarzetzDialogComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MarzetzDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
