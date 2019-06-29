import React from 'react';
import {connect} from 'react-redux';

import {createStream} from '../actions';
import StreamForm from './streamForm';


class Streamcreate extends React.Component {

    onFormSubmit = (formValues) => {
        this.props.createStream(formValues)
    }

    
    
    render() {
        
        
        return (
            <div>
                <h3>Create a Stream</h3>
                <StreamForm onSubmit={this.onFormSubmit}/>
            </div>
        )
    }
}




export default connect(null,{createStream})(Streamcreate)