import ReactDOM from 'react-dom';
import React, { FunctionComponent } from 'react';
import { HomeContainer } from 'app-home/index';

const App: FunctionComponent = () => {
    return (
        <div>
            <h1>This is my React app!</h1>
            <HomeContainer />
        </div>
    );
}
ReactDOM.render(<App />, document.getElementById('root'));