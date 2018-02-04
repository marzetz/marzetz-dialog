import {ComponentFactoryResolver, ComponentRef, Directive, Inject, OnDestroy, OnInit, ViewContainerRef} from '@angular/core';
import {MarzetzDialogObservablesService} from '../service/marzetz-dialog-observables.service';
import {Subscription} from 'rxjs/Subscription';
import {MarzetzDialogInternal} from '../utility/marzetz-dialog.internal';
import {MarzetzDialogComponent} from '../component/marzetz-dialog.component';

@Directive({
    selector: '[appMarzetzDialog]'
})
export class MarzetzDialogDirective implements OnInit, OnDestroy {
    private componentsList: ComponentRef<MarzetzDialogComponent>[] = [];
    private internalsArraySubscribtion: Subscription;

    constructor(private marzetzDialogObservablesService: MarzetzDialogObservablesService,
                private viewContainerRef: ViewContainerRef,
                private componentFactoryResolver: ComponentFactoryResolver) {
    }

    /**
     * This method creates subscription of marzetzDialogObservable and then passes data to resolveComponent method;
     */
    private createInternalsArraySubscription(): void {
        this.internalsArraySubscribtion = this.marzetzDialogObservablesService.getMarzetzDialogObservable()
            .subscribe(data => {
                if (data) {
                    for (const dialog in data) {
                        if (data.hasOwnProperty(dialog)) {
                            this.resolveComponent(data[dialog]);
                        }
                    }
                }
            });

        return;
    }

    /**
     * This method checks some of the dialog options and calls appropriate methods;
     */
    private resolveComponent(component: MarzetzDialogInternal): void {
        if (component._init) {
            const _cfr = this.componentFactoryResolver.resolveComponentFactory(MarzetzDialogComponent);
            const _vcf = this.viewContainerRef.createComponent(_cfr);
            this.componentsList.push(_vcf);

            _vcf.instance.dialogSettings = component;

            _vcf.changeDetectorRef.detectChanges();
            component._init = false;

            return;
        }

        if (component._destroy) {
            const _component = this.componentsList[component._index];
            _component.destroy();
        }

        const _vcfUpdate = this.componentsList[component._index];
        _vcfUpdate.instance.dialogSettings = component;

        return;
    }

    ngOnInit () {
        this.createInternalsArraySubscription();
    }

    ngOnDestroy() {
        this.internalsArraySubscribtion && this.internalsArraySubscribtion.unsubscribe();
    }
}
