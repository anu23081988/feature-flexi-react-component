import React from 'react';
import './label.css';

export default class Label extends React.Component {
    render () {
        const key   = this.props.key;
        const name  = this.props.name;
        const label = this.props.label;

        return(
            <label key = {key} htmlFor  = {name}> {label} </label>
        )
    }
}