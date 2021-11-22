import React, { Component } from "react";

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
        this.props.CreateRecruit(this.state.formData);
    }

    render() {
        return (
            <div>
                <h1>Add a potential recruit</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            className="form-control"
                            value={this.state.formData.name}
                            onChange={this.handleChange}
                            name="name"
                            required
                        />
                    </div>
                    <div>
                        <label
                            className="form-control"
                            value={this.state.formData.age}
                            onChange={this.handleChange}
                            name="age"
                            required
                        />
                    </div>
                    <div>
                        <label
                            className="form-control"
                            value={this.state.formData.position}
                            onChange={this.handleChange}
                            name="position"
                            required
                        />
                    </div>
                    <div>
                        <label
                            className="form-control"
                            value={this.state.formData.availability}
                            onChange={this.onChange}
                            name="availability"
                            required
                        />
                    </div>
                    <div>
                        <label
                            className="form-control"
                            value={this.state.formData.image}
                            onChange={this.onChange}
                            name="image"
                            required
                        />
                    </div>
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