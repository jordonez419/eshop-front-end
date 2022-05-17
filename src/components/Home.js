import React from 'react'
import { useNavigate } from 'react-router-dom'
function Home() {
    const navigate = useNavigate()
    const routeToRegister = () => {
        navigate('/register')
    }
    return (
        <div className="App">
            <h1>Home component</h1>
            <button onClick={() => routeToRegister()}>Sign Up</button>
        </div>
    );
}

export default Home;
