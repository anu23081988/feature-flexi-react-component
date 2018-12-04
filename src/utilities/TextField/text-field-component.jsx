import React from 'react';
import Label from '../Label/label-component.jsx';
import './text-field.css';

export default class TextField extends React.Component {
    onChange = (e) => {
        this.props.onChange(e);
    }
    render () {
        const type  = this.props.type;
        const name  = this.props.name;
        const label = this.props.label;
        const key   = "t" + name;

        return(
            <div key = {name}>
                <Label name = {name} label = {label}/>
                
                <input type={type}
                        key = {key}
                        name = {name}
                        placeholder = {label} 
                        ref = {(key)=> {this[key]=key}}
                        onChange = {(e)=>{this.onChange(e)}}
                />
            </div>
        )
    }
}