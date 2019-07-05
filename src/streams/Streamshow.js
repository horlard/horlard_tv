import React, { Component } from 'react';
import {connect} from 'react-redux';
import flv from 'flv.js';
import {fetchStream} from '../actions';

class Streamshow extends Component {
    constructor(props){
        super(props);
        this.videoRef=React.createRef();
    }
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
        this.buildplayer();
        
    }
    componentDidUpdate(){
        this.buildplayer();
    }
    componentWillUnmount(){
        this.player.destroy();
    }
    buildplayer(){
        if(this.player || !this.props.stream) {
            return;
        }
        this.player=flv.createPlayer({
            type:'flv',
            url: `http://localhost:8000/live/${this.props.match.params.id}.flv`

        });
        this.player.attachMediaElement(this.videoRef.current);
        this.player.load();
    }
    render() {
        if(!this.props.stream || !this.props.isSignedIn) {
            return <div>Loading</div>
        }

        const {title,description} = this.props.stream;
        return (
            <div>
                <video style={{width:'100%'}}  ref={this.videoRef} controls/>
                <h3>{title}</h3>
                <h5>{description}</h5>
            </div>
        )
    }
}
const mapStateToProps = (state,ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id],
        isSignedIn : state.auth.isSignedIn
    }
}

export default connect(mapStateToProps,{fetchStream})(Streamshow);