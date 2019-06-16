import React from 'react';
import {connect} from 'react-redux';
import {Signin,Signout} from '../actions';


class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2',() => {
            window.gapi.client.init({
                clientId: '388348893296-p02bmic3276qp7vssooqg4vu9lp3kp69.apps.googleusercontent.com',
                scope: 'email'
            }).then (() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onauthchange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onauthchange);

            })
        })
    }

    onauthchange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.Signin(this.auth.currentUser.get().getId());
        }else {
            this.props.Signout();
        }
    }

    onsignin = () => {
        this.auth.signIn();  
        console.log(this.props.state)  
    }
    onsignout = () => {
        this.auth.signOut(); 
    }

    renderbutton() {
       if(this.props.isSignedIn === null) {
           return null;
       } else if(this.props.isSignedIn) {
           return (
           <button onClick={this.onsignout} className='ui red google button'>
            <i className='google icon'></i>
            sign out
           </button>
           )
       } else {
        return (
            <button className='ui red google button' onClick={this.onsignin}>
             <i className='google icon'></i>
                 Sign in with google
            </button>
            )
       }
    }



    render() {
        return <div>{this.renderbutton()}</div>
    }
}

const mapStateToProps = (state)  => {
    return {isSignedIn: state.auth.isSignedin}
}

export default connect(mapStateToProps,{Signin,Signout})(GoogleAuth);