import {Component, Host, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {MarzetzDialogComponent} from "marzetz-dialog";

@Component({
    selector: 'app-custom-dialog',
    templateUrl: './custom-dialog.component.html',
    styleUrls: ['./custom-dialog.component.css']
})
export class CustomDialogComponent implements OnInit {
    public myForm: FormGroup;

    constructor(private fb: FormBuilder,
                @Host() private dialog: MarzetzDialogComponent) {
    }

    private createForm() {
        this.myForm = this.fb.group({
            foo: '',
            bar: ''
        });
    }

    public closeFromInside() {
        this.dialog.close();
    }

    public submit() {
        alert(`Form submitted ${this.myForm.controls.foo.value}`);
    }

    ngOnInit() {
        this.createForm();
    }

}
