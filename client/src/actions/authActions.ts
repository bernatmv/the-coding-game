import { createAction } from 'redux-actions';
import ActionsConstants from '../commons/constants/actionsConstants';

export const login = createAction<string>(ActionsConstants.Login);