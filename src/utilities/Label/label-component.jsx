import React from 'react';
import './label.css';

export default class Label extends React.Component {
    render () {
        const name  = this.props.name;
        const label = this.props.label;
        const key   = "l" + name;
        return(
            <label key = {key} htmlFor = {name}>{label}</label>
        )
    }
}