import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RootState from '../reducers/state/rootState';
import TheCodingGameProps from './theCodingGameProps';
import {Stage} from '../commons/constants/systemConstants';
import Login from './login/login';
import * as SystemActions from '../actions/systemActions';

import * as styles from './theCodingGame.less';

@connect(mapStateToProps, mapDispatchToProps)
export class TheCodingGame extends React.Component<TheCodingGameProps, {}> {

    private _getStage(model, actions): JSX.Element {
        return model.stage === Stage.Login ? <Login play={actions.system.play} /> : null;
    }

    render() {
        const {system, actions} = this.props;
        return <div className={styles.container}>
            {this._getStage(system, actions)}
        </div>;
    }
}

function mapStateToProps(state: RootState) {
    return {
        system: state.system
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            system: bindActionCreators(SystemActions as any, dispatch)
        }
    };
}