import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {fetchStream,editStream} from '../actions';
import StreamForm from './streamForm';
import Loader from '../components/loader';
class Streamedit extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }
    onSubmit = (formValues) => {
        this.props.editStream(this.props.match.params.id,formValues);
        console.log(formValues);
    }
    render() {
        return (
            <div>
                <h3>Edit a Stream</h3>
                {
                    this.props.isSignedIn ? <StreamForm onSubmit={this.onSubmit} initialValues={_.pick(this.props.stream,'title','description')}/>
                     : <Loader />
                }
                
            </div>
        )
    }
    
}
const mapStateToProps = (state,ownProps) => {
    return {stream:state.streams[ownProps.match.params.id],isSignedIn: state.auth.isSignedin}
}
export default connect(mapStateToProps,{fetchStream,editStream})(Streamedit);