import React from 'react';
import Label from '../Label/label-component.jsx';
import './dropdown.css';

export default class Dropdown extends React.Component {
    onChange = (e) => {
        this.props.onChange(e);
    }
    render () {
        const key     = this.props.key;
        const name    = this.props.name;
        const label   = this.props.label;
        const options = this.props.options;

        return(
            <div key = {name}>
                        <Label key = {"l" + name} label = {label}/>
                        <select name={name} key = {key} onChange = {(e)=>{this.onChange(e)}}>
                        <option key="noSelection" value="">No option selected</option>
                            {   
                                options.map(option => 
                                    <option key={option} value={option}> {option}</option>
                                )
                            }
                        </select>
                    </div>
        )
    }
}