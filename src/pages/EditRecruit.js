import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class EditRecruit extends Component {
    state = {
        formData: this.props.location.state.selectedRecruit
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
        this.props.updateRecruit(this.state.formData);
    };

    render() {
        return (
            <>
                <h1>Edit Recruit</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Age</label>
                        <input
                            className="form.control"
                            name='age'
                            value={this.state.formData.name}
                            onChange={this.handleChange}
                            required
                            />
                    </div>
                    <div className="form-group">
                        <label>Availability</label>
                        <input
                            className="form-group"
                            name="availability"
                            value={this.state.formData.availability}
                            onChange={this.handleChange}
                            required
                            />
                    </div>
                    <div className="form-group">
                        <label>Favorability</label>
                        <input
                            className="form-group"
                            name="favorability"
                            value={this.state.formData.favorability}
                            onChange={this.handleChange}
                            required
                            />
                    </div>
                    <div className="form-group">
                        <label>Hired</label>
                        <input
                            className="form-group"
                            name="hired"
                            value={this.state.formData.hired}
                            onChange={this.handleChange}
                            required
                            />
                    </div>
                    <div className="form-group">
                        <label>Picture URL</label>
                        <input
                            className="form-group"
                            name="image"
                            value={this.state.formData.image}
                            onChange={this.handleChange}
                            required
                            />
                    </div>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            className="form-group"
                            name="name"
                            value={this.state.formData.name}
                            onChange={this.handleChange}
                            required
                            />
                    </div>
                    <div className="form-group">
                        <label>Position</label>
                        <input
                            className="form-group"
                            name="position"
                            value={this.state.formData.position}
                            onChange={this.handleChange}
                            required
                            />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="btn btn-info mr-2"
                        >
                            UPDATE RECRUIT
                        </button>
                        <Link className="btn btn-dark" to='/'>CANCEL</Link>
                    </div>
                </form>
            </>
        );
    }
}