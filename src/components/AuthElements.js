import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import ExitToApp from '@material-ui/icons/ExitToApp';

const AuthElements = function (props) {
    const logInButton = () => {
        if (props.user) {
            return (
                [<Avatar
                    src={props.user.providerData[0].photoURL}
                    key={props.user.providerData[0].photoURL}
                // className={this.props.classes.mt} 
                />,

                <IconButton
                    key={props.user.providerData[0].uid}
                    onClick={props.logout}
                    color="inherit">
                    <ExitToApp></ExitToApp>
                </IconButton>]
            );
        };

        return (
            <Button variant="contained" onClick={props.login}> Iniciar sesion</Button>
        );
    }

    return (
        <div className={props.classes.container}>
            {logInButton()}
        </div>
    );
}

export default withStyles({
    container: {
        display: 'flex',
        flexDirection: 'row'
    },
    mt: {
        marginTop: '5px',
        marginRight: '5px'
    }
})(AuthElements);