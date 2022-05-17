import React from 'react'
function Register() {
    return (
        <div className="App">
            <h1>Register component</h1>
            <form>
                <label> Email
                    <input type='email'></input>
                </label>
                <label> Password
                    <input type='password'></input>
                </label>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default Register;
