import React from 'react';
import twilogo from '../Twitter_Logo_Black.png';
import instalogo from '../instalogo.png'
import '../App.css';

function App() {
    return (
        <div className="Home">
            <div className="Homedit">
                <h1>
                    <span>
                        _tm_
                </span>
                </h1>
                <h3>
                    <span>
                        DESIGN | INTERIOR | GADGET
                </span>
                </h3>
            </div>
            <footer>
                <a href="https://twitter.com/fu_takos_"
                    target="_blank"
                    rel="noopener"
                    class="App-link">
                    <img src={twilogo} className="twilogo" alt="logo" />
                </a>
                <a href="https://www.instagram.com/taco_sman/"
                    target="_blank"
                    rel="noopener"
                    class="App-link">
                    <img src={instalogo} className="instalogo" alt="logo" />
                </a>
            </footer>

        </div >
    );
}

export default App;  