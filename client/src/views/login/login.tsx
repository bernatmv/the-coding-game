import * as React from 'react';
import LoginProps from './loginProps';

import * as styles from './login.less';

export default class Login extends React.Component<LoginProps, {}> {
    render(): JSX.Element {
        return <div className={styles.container}>
            <div className={styles.title}>
                The Coding Game
            </div>
            <div className={styles.svg_wrapper} onClick={this.props.play}>
                <svg height='60' width='320' xmlns='http://www.w3.org/2000/svg'>
                    <rect className={styles.shape} height='60' width='320' />
                </svg>
                <div className={styles.button}>PLAY</div>
            </div>
        </div>;
    }
}