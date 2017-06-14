import { RouteComponentProps } from 'react-router';
import * as AuthActions from '../actions/authActions';

interface TheCodingGameProps extends RouteComponentProps<void> {
    actions: {
        auth: typeof AuthActions;
    };
}
export default TheCodingGameProps;