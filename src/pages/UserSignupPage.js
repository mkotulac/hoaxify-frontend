import React from 'react';

class UserSignupPage extends React.Component {

    state = {
        displayName: '',
        username: '',
        password: '',
        passwordRepeat: ''
    };

    onChangeDisplayName = (event) => {
        const value = event.target.value;
        this.setState({displayName: value})
    }

    onChangeUsername = (event) => {
        const value = event.target.value;
        this.setState({username: value})
    }

    onChangePassword = (event) => {
        const value = event.target.value;
        this.setState({password: value})
    }

    onChangePasswordRepeat = (event) => {
        const value = event.target.value;
        this.setState({passwordRepeat: value})
    }

    onClickSignup = () => {
        const user = {
            username: this.state.username,
            displayName: this.state.displayName,
            password: this.state.password
        }
        this.props.actions.postSignup(user);
    }

    render() {
        return (
            <div>
                <h1>Sign Up</h1>
                <div>
                    <input
                        placeholder={'Your display name'}
                        value={this.state.displayName}
                        onChange={this.onChangeDisplayName}
                    />
                </div>
                <div>
                    <input
                        placeholder={'Your username'}
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                    />
                </div>
                <div>
                    <input
                        type={'password'}
                        placeholder={'Your password'}
                        value={this.state.password}
                        onChange={this.onChangePassword}
                    />
                </div>
                <div>
                    <input
                        type={'password'}
                        placeholder={'Repeat your password'}
                        value={this.state.passwordRepeat}
                        onChange={this.onChangePasswordRepeat}
                    />
                </div>
                <div>
                    <button
                        onClick={this.onClickSignup}
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        )
    }
}

UserSignupPage.defaultProps = {
    actions: {
        postSignup: () => {
            new Promise((resolve, reject) => {
                resolve({});
            })
        }
    }
}

export default UserSignupPage;