import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RootState from '../reducers/state/rootState';
import TheCodingGameProps from './theCodingGameProps';

import * as styles from './theCodingGame.less';

@connect(mapStateToProps, mapDispatchToProps)
export class TheCodingGame extends React.Component<TheCodingGameProps, {}> {

    render() {
        return <div className={styles.container}>
            Bello!
        </div>;
    }
}

function mapStateToProps(state: RootState) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {};
}