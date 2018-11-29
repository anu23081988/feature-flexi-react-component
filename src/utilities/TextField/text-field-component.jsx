import React from 'react';
import Label from '../Label/label-component.jsx';
import './text-field.css';

export default class TextField extends React.Component {
    onChange = (e) => {
        this.props.onChange(e);
    }
    render () {
        const key   = this.props.key;
        const type  = this.props.type;
        const name  = this.props.name;
        const label = this.props.label;

        return(
            <div key = {name}>
                        <Label key = {"l" + name} label = {label}/>
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