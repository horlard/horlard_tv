import React from 'react';
import Modal from '../components/modal';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchStream,deleteStream} from '../actions'
import History from '../history';


class streamdelete extends React.Component{
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }
    onDelete(){
        this.props.deleteStream(this.props.match.params.id);
    }
    renderActions = () => {
        return (
            <React.Fragment>
                <button onClick={this.onDelete.bind(this)} className='ui button negative'>
                    Delete
                </button>
                <Link to='/' className='ui button'>
                    Cancel
                </Link>
            </React.Fragment>
        )
    }
    renderContent(){
        if(!this.props.stream) {
            return 'Are you sure you want to delete this stream'
        }else{
            return `Are you sure you want to delete the stream with title : ${this.props.stream.title}`
        }
    }
    render() {
        return (
            <div>
                
                <Modal
                    title='Delete Stream'
                    content={this.renderContent()}
                    actions={this.renderActions()}
                    onDismiss={()=>History.push('/')}
    
                />
            </div>
        )
    }
     
}
const mapStateToProps =(state,ownProps) =>{
    return {stream:state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps,{fetchStream,deleteStream})(streamdelete);