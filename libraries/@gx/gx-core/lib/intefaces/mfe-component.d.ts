import { BehaviorSubject } from 'rxjs';
import { IAction } from '../../public-api';
export interface IMFEComponent {
    setCommunicationSubject: (subject: BehaviorSubject<IAction>) => void;
}
//# sourceMappingURL=mfe-component.d.ts.map