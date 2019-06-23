import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import '../assets/css/app.scss';
import {Route} from 'react-router-dom';
import Products from './product-list';


const App = () => (
    <div>
        <div className="container">
            <Route path="/" exact component={Products}/>
        </div>
    </div>
);

export default App;
