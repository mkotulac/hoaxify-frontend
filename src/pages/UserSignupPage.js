import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
            <div className={'container'}>
                <h1 className='text-center'>Sign Up</h1>
                <div className='col-12 mb-3'>
                    <label>Display name</label>
                    <input
                        className='form-control'
                        placeholder={'Your display name'}
                        value={this.state.displayName}
                        onChange={this.onChangeDisplayName}
                    />
                </div>
                <div className='col-12 mb-3'>
                    <label>Username</label>
                    <input
                        className='form-control'
                        placeholder={'Your username'}
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                    />
                </div>
                <div className='col-12 mb-3'>
                    <label>Password</label>
                    <input
                        className='form-control'
                        type={'password'}
                        placeholder={'Your password'}
                        value={this.state.password}
                        onChange={this.onChangePassword}
                    />
                </div>
                <div className='col-12 mb-3'>
                    <label>Repeat password</label>
                    <input
                        className='form-control'
                        type={'password'}
                        placeholder={'Repeat your password'}
                        value={this.state.passwordRepeat}
                        onChange={this.onChangePasswordRepeat}
                    />
                </div>
                <div
                className='text-center'>
                    <button
                        className='btn btn-primary'
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
