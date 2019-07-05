import React from 'react';
import {connect} from 'react-redux';

import {createStream} from '../actions';
import StreamForm from './streamForm';
import Loader from '../components/loader';

class Streamcreate extends React.Component {

    onFormSubmit = (formValues) => {
        this.props.createStream(formValues)
    }

    
    
    render() {
        
        
        return (
            <div>
                <h3>Create a Stream</h3>
                {
                    this.props.isSignedIn ? <StreamForm onSubmit={this.onFormSubmit}/>
                     : <Loader/>
                }
                
                
            </div>
            
        )
    }
}


const mapStateToProps = state => {
    return {isSignedIn: state.auth.isSignedin}
}


export default connect(mapStateToProps,{createStream})(Streamcreate)