import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';

import Streamlist from '../streams/Streamlist';
import Streamcreate from '../streams/Streamcreate';
import Streamedit from '../streams/Streamedit';
import Streamdelete from '../streams/Streamdelete';
import Streamshow from '../streams/Streamshow';
import Header from './Header';

const App = () => {

    return (
    <div>
        <BrowserRouter>
            
            <div className='ui container'>
                <Header />
                <Route path='/' exact component={Streamlist} />
                <Route path='/new' exact component={Streamcreate} />
                <Route path='/delete' exact component={Streamdelete} />
                <Route path='/edit' exact component={Streamedit} />
                <Route path='/show' exact component={Streamshow} />
            </div>
        
        
        
        </BrowserRouter>
    </div>
    )
}

export default App;