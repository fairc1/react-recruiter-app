import React, { Component } from "react";

const LabeledInput = ({label, name, formData, onChange, required}) => {
    return (
        <div className="form-group">
            <label>{label}</label>
            <input
                className="form-control"
                value={formData[name]}
                onChange={onChange}
                name={name}
                required={required}
            />
        </div>
    );
};

export default class CreateRecruit extends Component {
    state = {
        formData: {
            age: '',
            availability: '',
            favorbiltiy: '',
            hired: '',
            image: '',
            name: '',
            position: '',
        }
    }

    handleChange = e => {
        this.setState({
            formData: {
                ...this.state.formData,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.createRecruit(this.state.formData);
    }

    render() {
        return (
            <div>
                <h1>Add a potential recruit</h1>
                <form onSubmit={this.handleSubmit}>
                    <LabeledInput label="Name" name="name" formData={this.state.formData} onChange={this.handleChange} required={true} />
                    <LabeledInput label="Age" name="age" formData={this.state.formData} onChange={this.handleChange} required={true} />
                    <LabeledInput label="Position" name="position" formData={this.state.formData} onChange={this.handleChange} required={true} />
                    <LabeledInput label="Availability" name="availability" formData={this.state.formData} onChange={this.handleChange} required={true} />
                    <LabeledInput label="Image" name="image" formData={this.state.formData} onChange={this.handleChange} required={true} />
                    <LabeledInput label="Hired" name="hired" formData={this.state.formData} onChange={this.handleChange} required={true} />
                    <button
                        type="submit"
                        className="btn btn-info"
                        >
                            Submit Recruit
                        </button>
                </form>
            </div>
        );
    }
}