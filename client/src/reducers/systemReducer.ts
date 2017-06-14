import {handleActions} from 'redux-actions';
import ActionsConstants from '../commons/constants/actionsConstants';
import {Stage} from '../commons/constants/systemConstants';
import SystemModel from '../commons/services/models/systemModel';
import initialState from './state/initialState';

export default handleActions<SystemModel, void>({
    [ActionsConstants.Play]: (state: SystemModel, action: ReduxActions.Action<void>): SystemModel => {
        return Object.assign({}, state, { stage: Stage.Game });
    }
}, initialState.system);