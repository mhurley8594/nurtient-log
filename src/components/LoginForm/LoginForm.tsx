import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class LoginForm extends React.Component {
    public render() {
        return (
            <div>
                <form>
                    <TextField
                        type="email"
                        placeholder="example@example.com"
                        id="email"
                        label="Email"
                    />
                    <TextField
                        type="password"
                        id="password"
                        label="Password"
                    />
                    <Button>Log In</Button>
                </form>
            </div>
        );
    }
}

export default LoginForm;
