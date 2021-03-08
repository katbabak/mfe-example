import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Actions } from './enums/actions.enum';
import * as i0 from "@angular/core";
export class CommunicationService {
    constructor() {
        this.actionsStream$ = new BehaviorSubject({ type: Actions.NoAction });
    }
}
CommunicationService.ɵfac = function CommunicationService_Factory(t) { return new (t || CommunicationService)(); };
CommunicationService.ɵprov = i0.ɵɵdefineInjectable({ token: CommunicationService, factory: CommunicationService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CommunicationService, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbXVuaWNhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rYXRlYmFiYWsvRGVza3RvcC93b3JrL2xvLWR4L3Byb2plY3RzL2d4LWNvcmUvc3JjLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2NvbW11bmljYXRpb24tc2VydmljZS9jb21tdW5pY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUMxQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFBO0FBRXRDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQTs7QUFLOUMsTUFBTSxPQUFPLG9CQUFvQjtJQURqQztRQUVTLG1CQUFjLEdBQTZCLElBQUksZUFBZSxDQUFVLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO0tBQzNHOzt3RkFGWSxvQkFBb0I7NERBQXBCLG9CQUFvQixXQUFwQixvQkFBb0I7a0RBQXBCLG9CQUFvQjtjQURoQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJ1xuXG5pbXBvcnQgeyBBY3Rpb25zIH0gZnJvbSAnLi9lbnVtcy9hY3Rpb25zLmVudW0nXG5pbXBvcnQgeyBJQWN0aW9uIH0gZnJvbSAnLi9tb2RlbHMvYWN0aW9uJ1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21tdW5pY2F0aW9uU2VydmljZSB7XG4gIHB1YmxpYyBhY3Rpb25zU3RyZWFtJDogQmVoYXZpb3JTdWJqZWN0PElBY3Rpb24+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxJQWN0aW9uPih7IHR5cGU6IEFjdGlvbnMuTm9BY3Rpb24gfSlcbn1cbiJdfQ==