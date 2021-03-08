(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('gx-core', ['exports', '@angular/core', 'rxjs'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['gx-core'] = {}, global.ng.core, global.rxjs));
}(this, (function (exports, i0, rxjs) { 'use strict';

    var GxCoreService = /** @class */ (function () {
        function GxCoreService() {
        }
        return GxCoreService;
    }());
    GxCoreService.ɵfac = function GxCoreService_Factory(t) { return new (t || GxCoreService)(); };
    GxCoreService.ɵprov = i0.ɵɵdefineInjectable({ token: GxCoreService, factory: GxCoreService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(GxCoreService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], null, null);
    })();

    var GxCoreComponent = /** @class */ (function () {
        function GxCoreComponent() {
        }
        return GxCoreComponent;
    }());
    GxCoreComponent.ɵfac = function GxCoreComponent_Factory(t) { return new (t || GxCoreComponent)(); };
    GxCoreComponent.ɵcmp = i0.ɵɵdefineComponent({ type: GxCoreComponent, selectors: [["lib-gx-core"]], decls: 2, vars: 0, template: function GxCoreComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "p");
                i0.ɵɵtext(1, " gx-core works! ");
                i0.ɵɵelementEnd();
            }
        }, encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(GxCoreComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-gx-core',
                        template: "\n    <p>\n      gx-core works!\n    </p>\n  ",
                        styles: [],
                    }]
            }], null, null);
    })();

    (function (Actions) {
        Actions["UpdateCurrency"] = "Update Currency";
        Actions["NoAction"] = "No Action";
    })(exports.Actions || (exports.Actions = {}));

    var CommunicationService = /** @class */ (function () {
        function CommunicationService() {
            this.actionsStream$ = new rxjs.BehaviorSubject({ type: exports.Actions.NoAction });
        }
        return CommunicationService;
    }());
    CommunicationService.ɵfac = function CommunicationService_Factory(t) { return new (t || CommunicationService)(); };
    CommunicationService.ɵprov = i0.ɵɵdefineInjectable({ token: CommunicationService, factory: CommunicationService.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(CommunicationService, [{
                type: i0.Injectable
            }], null, null);
    })();

    var GxCoreModule = /** @class */ (function () {
        function GxCoreModule() {
        }
        GxCoreModule.forRoot = function (config) {
            return {
                providers: [CommunicationService],
                ngModule: GxCoreModule,
            };
        };
        return GxCoreModule;
    }());
    GxCoreModule.ɵmod = i0.ɵɵdefineNgModule({ type: GxCoreModule });
    GxCoreModule.ɵinj = i0.ɵɵdefineInjector({ factory: function GxCoreModule_Factory(t) { return new (t || GxCoreModule)(); } });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(GxCoreModule, { declarations: [GxCoreComponent], exports: [GxCoreComponent] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(GxCoreModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [GxCoreComponent],
                        exports: [GxCoreComponent],
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of gx-core
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CommunicationService = CommunicationService;
    exports.GxCoreComponent = GxCoreComponent;
    exports.GxCoreModule = GxCoreModule;
    exports.GxCoreService = GxCoreService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=gx-core.umd.js.map
