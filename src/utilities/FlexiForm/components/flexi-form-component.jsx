import React from 'react';
//import ReactDOM from 'react-dom';
import '../style/flexi-form-style.css';
import TextField from '../../TextField/text-field-component.jsx';
import Dropdown from '../../Dropdown/dropdown-component';

export default class Flexi extends React.Component {
    
    constructor (props) {
        super(props);
        this.state = {}
    }

    onSubmit = (e) =>{
        e.preventDefault();
        if (this.props.onSubmit)
            this.props.onSubmit(this.state);
    }
    onChange = (e) => {
        this.setState ({
            [e.target.name]: e.target.value
        })
    }
    renderForm = () => {
        let model = this.props.config.items;
        let formUI = model.map((m) => {
            let name = m.name;
            let label = m.label;
            let type = m.type;

            if(type.toLowerCase() === "textfield"){
                return (
                    <TextField 
                        key = {"l" + name}
                        type = {type}
                        label={label} 
                        name={name} 
                        onChange = {(e) => {this.onChange(e)}}/>
                )  
            }
            if(type.toLowerCase() === "dropdown"){
                return (
                    <Dropdown 
                        key = {"d" + name}
                        label={label} 
                        name={name} 
                        options = {m.values}
                        onChange = {(e) => {this.onChange(e)}}/>
                )  
            }
            return <div>No UI to render</div>;
        });

        return formUI;
    }
    render () {
        const title = this.props.title || 'Flexi Form Component';
        return (
            <div className="container">
                <h3>{title}</h3>
                <form className="flexi-form" onSubmit = {(e)=>{this.onSubmit(e)}}>
                    {this.renderForm()}
                    <div className = "form-group">
                        <button type = "submit">submit</button>
                    </div>
                </form>
            </div>
        )
    }
}