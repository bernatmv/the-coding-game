import { log } from '../commons/helpers/appLogger';

export default function loggerMiddleware(store) {
    return next => 
            (action) => {
                log(`ACTION - `, action);
                return next(action);
            };
}