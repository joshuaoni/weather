import React from 'react';
import Page from './components/Page';
import {BrowserRouter} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

function App() {
    return (
        <div className='top'>
            <div className="App">
                <BrowserRouter>
                    <Page />
                </BrowserRouter>
            </div>
            <div className='footer'>
                <span className='pr-2'>
                    ©2022 Designed and developed by Joshua 
                </span>
                <a title='Github source code' href="https://github.com/joshuaoni/weather" className="">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
            </div>
        </div>
    );
}

export default App;
