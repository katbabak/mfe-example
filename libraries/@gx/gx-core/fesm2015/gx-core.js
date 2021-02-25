import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

class GxCoreService {
}
GxCoreService.ɵfac = function GxCoreService_Factory(t) { return new (t || GxCoreService)(); };
GxCoreService.ɵprov = ɵɵdefineInjectable({ token: GxCoreService, factory: GxCoreService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(GxCoreService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();

class GxCoreComponent {
}
GxCoreComponent.ɵfac = function GxCoreComponent_Factory(t) { return new (t || GxCoreComponent)(); };
GxCoreComponent.ɵcmp = ɵɵdefineComponent({ type: GxCoreComponent, selectors: [["lib-gx-core"]], decls: 2, vars: 0, template: function GxCoreComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, " gx-core works! ");
        ɵɵelementEnd();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(GxCoreComponent, [{
        type: Component,
        args: [{
                selector: 'lib-gx-core',
                template: `
    <p>
      gx-core works!
    </p>
  `,
                styles: [],
            }]
    }], null, null); })();

class GxCoreModule {
}
GxCoreModule.ɵmod = ɵɵdefineNgModule({ type: GxCoreModule });
GxCoreModule.ɵinj = ɵɵdefineInjector({ factory: function GxCoreModule_Factory(t) { return new (t || GxCoreModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(GxCoreModule, { declarations: [GxCoreComponent], exports: [GxCoreComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(GxCoreModule, [{
        type: NgModule,
        args: [{
                declarations: [GxCoreComponent],
                exports: [GxCoreComponent],
            }]
    }], null, null); })();

class CommunicationService {
    constructor() {
        this.actionsStream$ = new BehaviorSubject(null);
    }
}
CommunicationService.ɵfac = function CommunicationService_Factory(t) { return new (t || CommunicationService)(); };
CommunicationService.ɵprov = ɵɵdefineInjectable({ token: CommunicationService, factory: CommunicationService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CommunicationService, [{
        type: Injectable
    }], null, null); })();

var Actions;
(function (Actions) {
    Actions["UpdateCurrency"] = "Update Currency";
})(Actions || (Actions = {}));

/*
 * Public API Surface of gx-core
 */

/**
 * Generated bundle index. Do not edit.
 */

export { Actions, CommunicationService, GxCoreComponent, GxCoreModule, GxCoreService };
//# sourceMappingURL=gx-core.js.map
