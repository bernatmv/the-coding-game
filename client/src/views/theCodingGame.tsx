import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RootState from '../reducers/state/rootState';
import TheCodingGameProps from './theCodingGameProps';
import Login from './login/login';
import * as AuthActions from '../actions/authActions';

import * as styles from './theCodingGame.less';

@connect(mapStateToProps, mapDispatchToProps)
export class TheCodingGame extends React.Component<TheCodingGameProps, {}> {

    render() {
        const {actions} = this.props;
        return <div className={styles.container}>
            <Login login={actions.auth.login} />
        </div>;
    }
}

function mapStateToProps(state: RootState) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            auth: bindActionCreators(AuthActions as any, dispatch)
        }
    };
}