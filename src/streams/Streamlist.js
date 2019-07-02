import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {fetchStreams} from '../actions';


class Streamlist extends React.Component {
    componentDidMount() {
        this.props.fetchStreams()
    }

    renderAdmin = (stream) => {
        if(stream.clientId === this.props.currentUserId) {
            return (
                <div className='right floated content'>
                    <Link to={`/edit/${stream.id}`} className='ui button primary'>
                        Edit
                    </Link>
                    <Link to={`/delete/${stream.id}`} className='ui negative button'>
                        Delete
                    </Link>
                </div>
            )
        }
        return null;
    }

    renderList= () => {
        return this.props.streams.map(stream => {
            return (
                <div className='item' key={stream.id}>
                    {this.renderAdmin(stream)}
                    <i className='large middle aligned icon camera'/>
                    <div className='content'>
                        <Link to={`/${stream.id}`} className='header'>
                            {stream.title}
                        </Link>
                        
                        <div className='description'>
                            {stream.description}
                        </div>
                    </div>
                    
                </div>
            )
        })
    }
    renderCreate() {
        if(this.props.isSignedin) {
            return (
                <div style={{textAlign : 'right'}}>
                    <Link to='/new' className='ui button primary'>
                        Create Stream
                    </Link>
                </div>
            )
        }
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <h2>Streams</h2>
                <div className='ui celled list'>{this.renderList()}</div>
                {this.renderCreate()}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
    streams: Object.values(state.streams),
    currentUserId : state.auth.clientId,
    isSignedin:state.auth.isSignedin}
}
export default connect(mapStateToProps,{fetchStreams})(Streamlist);