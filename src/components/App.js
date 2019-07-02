import React from 'react';
import {Router,Route,Switch} from 'react-router-dom';

import Streamlist from '../streams/Streamlist';
import Streamcreate from '../streams/Streamcreate';
import Streamedit from '../streams/Streamedit';
import Streamdelete from '../streams/Streamdelete';
import Streamshow from '../streams/Streamshow';
import Header from './Header';
import History from '../history';

const App = () => {

    return (
    <div>
        <Router history={History}>
            
            <div className='ui container'>
                <Header />
                <Switch>
                <Route path='/' exact component={Streamlist} />
                <Route path='/new' exact component={Streamcreate} />
                <Route path='/delete/:id' exact component={Streamdelete} />
                <Route path='/edit/:id' exact component={Streamedit} />
                <Route path='/:id' exact component={Streamshow} />
                </Switch>
                
            </div>
        
        
        
        </Router>
    </div>
    )
}

export default App;