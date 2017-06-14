import RootState from './rootState';
import SystemModel from '../../commons/services/models/systemModel';
import {Stage} from '../../commons/constants/systemConstants';

let initialState: RootState = {
    system: new SystemModel(Stage.Login)
};
export default initialState;