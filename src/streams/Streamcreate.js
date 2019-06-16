import React from 'react';
import {Field,reduxForm} from 'redux-form';
import {connect} from 'react-redux';

import {createStream} from '../actions'


class Streamcreate extends React.Component {

    onFormSubmit = (formValues) => {
        this.props.createStream(formValues)
    }

    renderErr = (meta) => {
        if (meta.error && meta.touched) {
            return (
                <div className='ui error message'>
                    <div className='header'>{meta.error}</div>
                </div>
            )

        }
    }
    renderInput = (Input) => {
        console.log(Input.meta)
        return (
            <div>
                <label>{Input.label}</label>
                <input  type='text' onChange={Input.input.onChange} value={Input.input.value} autoComplete= 'off'/>
                <div>{this.renderErr(Input.meta)}</div>
            </div>
        )
    }
    render() {
        
        
        return (
            <div>
                <form className='ui form error' onSubmit={this.props.handleSubmit(this.onFormSubmit)} >
                    <Field name='title' component = {this.renderInput} label='Enter title'/>
                    <Field name='description' component = {this.renderInput} label='Enter description'/>
                    <button className='ui button primary' style={{marginTop: 20}}>Submit</button>
                </form>
            </div>
        )
    }
}
const Validation = (formValues) => {
    const errors = {}
    if (!formValues.title) {
        errors.title ='You must enter a title';
    }
    if (!formValues.description) {
        errors.description ='You must enter a description';
    }
    return errors;
}

const REDUXFORM = reduxForm({
    form : 'streamcreate',
    validate : Validation
})(Streamcreate)

export default connect(null,{createStream})(REDUXFORM)