import React from 'react';

export default class Signup extends React.Component {
    render() {
        return (
            <div className='signup-page' >
                <h2>Signup</h2>
                <form className='signup-form' onSubmit={this.handleSubmitBasicAuth}>
                    <div className="signup-form-entry">
                        <label htmlFor='first-name'>First name</label>
                        <input className='registration-control' 
                         type='text' name='firstName' id='first-name' onChange={e => this.updateFirstName(e.target.value)} />
                        {/* {this.state.firstName.touched && (<ValidationError message={this.validateFirstName()} />)} */}
                    </div>
                    <div className="signup-form-entry">
                        <label htmlFor='last-name'>Last name</label>
                        <input className='registration-control' type='text' name='lastName' id='last-name'
                        onChange={e => this.updateLastName(e.target.value)} />
                        {/* {this.state.lastName.touched && (<ValidationError message={this.validateLastName()} />)} */}
                    </div>
                    <div className="signup-form-entry">
                        <label htmlFor='username'>Username</label>
                        <input className='registration-control' 
                         type='text' name='userName' id='username' onChange={e => this.updateUsername(e.target.value)} />
                        {/* {this.state.Username.touched && (<ValidationError message={this.validateUsername()} />)} */}
                    </div>
                    <div className="signup-form-entry">
                        <label htmlFor='email'>Email</label>
                        <input className='registration-control' type='text' name='email' id='email' onChange={e => this.updateEmail(e.target.value)} />
                        {/* {this.state.email.touched && (<ValidationError message={this.validateEmail()} />)} */}
                    </div>
                    <div className="signup-form-entry">
                        <label htmlFor='password'>Password</label>
                        <input className='registration-control' type='password' name='password' id='password' onChange={e => this.updatePassword(e.target.value)} />
                        {/* {this.state.password.touched && (<ValidationError message={this.validatePassword()} />)} */}
                    </div>
                    <div className="signup-form-entry">
                        <label htmlFor='repeat-password'>Repeat Password</label>
                        <input className='registration-control' type='password'
                            name='repeatPassword' id='repeatPassword' onChange={e => this.updateRepeatPassword(e.target.value)} />
                        {/* {this.state.repeatPassword.touched && (<ValidationError message={this.validateRepeatPassword()} />)} */}
                    </div>
                    <button type='submit'>
                        Sign up
                    </button>
                </form>
            </div>
        )
    }
}