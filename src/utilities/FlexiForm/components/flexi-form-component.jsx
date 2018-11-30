import React from 'react';
import '../style/flexi-form-style.css';
import TextField from '../../TextField/text-field-component.jsx';
import Dropdown from '../../Dropdown/dropdown-component';

export default class Flexi extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            personname:'',
            states:''
        }
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
                    /* Textbox Component */
                    <TextField type = "text" label={label} name={name} onChange = {(e) => {this.onChange(e)}}/>
                )  
            }
            if(type.toLowerCase() === "dropdown"){
                return (
                     /* Dropdown Component */
                    <Dropdown label={label} name={name} options = {m.values} onChange = {(e) => {this.onChange(e)}}/>
                )  
            }
            return <div>No UI to render</div>;
        });

        return formUI;
    }
    render () {
        const title = this.props.title || 'Flexi Form Component';
        const class_to_apply = this.props.className ? this.props.className:'';
        return (
            <div className={"container " +  class_to_apply} key="container">
                <div className="form-header" key="header">{title}</div>
                <form className="flexi-form" onSubmit = {(e)=>{this.onSubmit(e)}} key="form">
                    {this.renderForm()}
                    <button type = "submit" key="btn">submit</button>
                </form>
            </div>
        )
    }
}