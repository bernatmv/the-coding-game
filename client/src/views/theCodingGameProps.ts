import { RouteComponentProps } from 'react-router';
import SystemModel from '../commons/services/models/systemModel';
import * as SystemActions from '../actions/systemActions';

interface TheCodingGameProps extends RouteComponentProps<void> {
    actions: {
        system: typeof SystemActions;
    };
    system: SystemModel;
}
export default TheCodingGameProps;