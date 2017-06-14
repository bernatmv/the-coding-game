import * as React from 'react';
import LoginProps from './loginProps';

import * as styles from './login.less';

import * as logoImage from '../../assets/images/logo.svg';

export default class Login extends React.Component<LoginProps, {}> {
    render(): JSX.Element {
        return (
            <div className={styles.container}>
                <div className={styles.menu}>
                    <div className={styles.logo}>
                        <img src={logoImage} className={styles.logo__main} />
                        <img src={logoImage} className={styles.logo__before} />
                        <img src={logoImage} className={styles.logo__after} />
                    </div>
                    <button>Bello!</button>
                </div>
            </div>
        );
    }
}