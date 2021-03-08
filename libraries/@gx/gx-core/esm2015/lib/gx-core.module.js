import { NgModule } from '@angular/core';
import { GxCoreComponent } from './gx-core.component';
import { CommunicationService } from './services/communication-service';
import * as i0 from "@angular/core";
export class GxCoreModule {
    static forRoot(config) {
        return {
            providers: [CommunicationService],
            ngModule: GxCoreModule,
        };
    }
}
GxCoreModule.ɵmod = i0.ɵɵdefineNgModule({ type: GxCoreModule });
GxCoreModule.ɵinj = i0.ɵɵdefineInjector({ factory: function GxCoreModule_Factory(t) { return new (t || GxCoreModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(GxCoreModule, { declarations: [GxCoreComponent], exports: [GxCoreComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(GxCoreModule, [{
        type: NgModule,
        args: [{
                declarations: [GxCoreComponent],
                exports: [GxCoreComponent],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3gtY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2thdGViYWJhay9EZXNrdG9wL3dvcmsvbG8tZHgvcHJvamVjdHMvZ3gtY29yZS9zcmMvIiwic291cmNlcyI6WyJsaWIvZ3gtY29yZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFBO0FBQ3JELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOztBQU94RSxNQUFNLE9BQU8sWUFBWTtJQUN2QixNQUFNLENBQUMsT0FBTyxDQUFDLE1BQVk7UUFDekIsT0FBTztZQUNMLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO1lBQ2pDLFFBQVEsRUFBRSxZQUFZO1NBQ3ZCLENBQUE7SUFDSCxDQUFDOztnREFOVSxZQUFZO3VHQUFaLFlBQVk7d0ZBQVosWUFBWSxtQkFIUixlQUFlLGFBQ3BCLGVBQWU7a0RBRWQsWUFBWTtjQUp4QixRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsZUFBZSxDQUFDO2dCQUMvQixPQUFPLEVBQUUsQ0FBQyxlQUFlLENBQUM7YUFDM0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHeENvcmVDb21wb25lbnQgfSBmcm9tICcuL2d4LWNvcmUuY29tcG9uZW50J1xuaW1wb3J0IHsgQ29tbXVuaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2NvbW11bmljYXRpb24tc2VydmljZSc7XG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbR3hDb3JlQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0d4Q29yZUNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIEd4Q29yZU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZz86IGFueSk6IE1vZHVsZVdpdGhQcm92aWRlcnM8R3hDb3JlTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3ZpZGVyczogW0NvbW11bmljYXRpb25TZXJ2aWNlXSxcbiAgICAgIG5nTW9kdWxlOiBHeENvcmVNb2R1bGUsXG4gICAgfVxuICB9XG59XG4iXX0=