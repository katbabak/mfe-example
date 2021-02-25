import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class CommunicationService {
    constructor() {
        this.actionsStream$ = new BehaviorSubject(null);
    }
}
CommunicationService.ɵfac = function CommunicationService_Factory(t) { return new (t || CommunicationService)(); };
CommunicationService.ɵprov = i0.ɵɵdefineInjectable({ token: CommunicationService, factory: CommunicationService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CommunicationService, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbXVuaWNhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rYXRlYmFiYWsvRGVza3RvcC93b3JrL2xvLWR4L3Byb2plY3RzL2d4LWNvcmUvc3JjLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2NvbW11bmljYXRpb24tc2VydmljZS9jb21tdW5pY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUMxQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFBOztBQUt0QyxNQUFNLE9BQU8sb0JBQW9CO0lBRGpDO1FBRVMsbUJBQWMsR0FBNkIsSUFBSSxlQUFlLENBQVUsSUFBSSxDQUFDLENBQUE7S0FDckY7O3dGQUZZLG9CQUFvQjs0REFBcEIsb0JBQW9CLFdBQXBCLG9CQUFvQjtrREFBcEIsb0JBQW9CO2NBRGhDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnXG5cbmltcG9ydCB7IElBY3Rpb24gfSBmcm9tICcuL21vZGVscy9hY3Rpb24nXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21tdW5pY2F0aW9uU2VydmljZSB7XG4gIHB1YmxpYyBhY3Rpb25zU3RyZWFtJDogQmVoYXZpb3JTdWJqZWN0PElBY3Rpb24+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxJQWN0aW9uPihudWxsKVxufVxuIl19