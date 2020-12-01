import React from 'react';
import {render, fireEvent} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import UserSignupPage from "./UserSignupPage";

describe('UserSignupPage', () => {

    describe('Layout', () => {
        it('should has header of Sign Up', () => {
            const {container} = render(<UserSignupPage/>)
            const header = container.querySelector('h1');
            expect(header).toHaveTextContent('Sign Up');
        });

        it('should has input for display name', () => {
            const {queryByPlaceholderText} = render(<UserSignupPage/>)
            const displayNameInput = queryByPlaceholderText('Your display name')
            expect(displayNameInput).toBeInTheDocument()
        });

        it('should has input for username', () => {
            const {queryByPlaceholderText} = render(<UserSignupPage/>)
            const usernameInput = queryByPlaceholderText('Your username')
            expect(usernameInput).toBeInTheDocument()
        });

        it('should has input for password', () => {
            const {queryByPlaceholderText} = render(<UserSignupPage/>)
            const passwordInput = queryByPlaceholderText('Your password')
            expect(passwordInput).toBeInTheDocument()
        });

        it('should be password type for password input', () => {
            const {queryByPlaceholderText} = render(<UserSignupPage/>)
            const passwordInput = queryByPlaceholderText('Your password')
            expect(passwordInput.type).toBe('password')
        });

        it('should has input for password repeat', () => {
            const {queryByPlaceholderText} = render(<UserSignupPage/>)
            const passwordRepeat = queryByPlaceholderText('Repeat your password')
            expect(passwordRepeat).toBeInTheDocument()
        });

        it('should be password type for password repeat input', () => {
            const {queryByPlaceholderText} = render(<UserSignupPage/>)
            const passwordRepeat = queryByPlaceholderText('Repeat your password')
            expect(passwordRepeat.type).toBe('password')
        });

        it('should has submit button', () => {
            const {container} = render(<UserSignupPage/>)
            const button = container.querySelector('button');
            expect(button).toBeInTheDocument();
        });
    })

    describe('Interactions', () => {

        const changeEvent = (content) => {
            return {
                target: {
                    value: content
                }
            }
        };

        let button, displayNameInput, usernameInput, passwordInput, repeatPasswordInput;

        const setupForSubmit = (props) => {
            const rendered = render(
                <UserSignupPage {...props}/>
            );

            const {container, queryByPlaceholderText} = rendered;

            displayNameInput = queryByPlaceholderText('Your display name')
            usernameInput = queryByPlaceholderText('Your username')
            passwordInput = queryByPlaceholderText('Your password')
            repeatPasswordInput = queryByPlaceholderText('Repeat your password')

            fireEvent.change(displayNameInput, changeEvent('my-display-name'))
            fireEvent.change(usernameInput, changeEvent('my-username'))
            fireEvent.change(passwordInput, changeEvent('password'))
            fireEvent.change(repeatPasswordInput, changeEvent('password'))

            button = container.querySelector('button');

            return rendered;
        }

        it('should sets the displayName value into state', () => {
            setupForSubmit();
            expect(displayNameInput).toHaveValue('my-display-name')
        });

        it('should sets the username value into state', () => {
            setupForSubmit();
            expect(usernameInput).toHaveValue('my-username')
        });

        it('should sets the password value into state', () => {
            setupForSubmit();
            expect(passwordInput).toHaveValue('password')
        });

        it('should sets the password repeat value into state', () => {
            setupForSubmit();
            expect(repeatPasswordInput).toHaveValue('password')
        });

        it('should calls postSignup when the fields are valid and the actions are provided in props', () => {
            const actions = {
                postSignup: jest.fn().mockResolvedValueOnce({})
            }

            setupForSubmit({actions});

            fireEvent.click(button);

            expect(actions.postSignup).toHaveBeenCalledTimes(1);
        });

        it('should not throw exc eption when clicking the button', () => {
            setupForSubmit();
            expect(() => {
                fireEvent.click(button);
            }).not.toThrow();
        });

        it('should calls post with user body when the fields are valid', () => {
            const actions = {
                postSignup: jest.fn().mockResolvedValueOnce({})
            }

            setupForSubmit({actions});

            fireEvent.click(button);

            const expectedUserObject = {
                username: 'my-username',
                displayName: 'my-display-name',
                password: 'password'
            }

            expect(actions.postSignup).toHaveBeenCalledWith(expectedUserObject);
        });
    });
})