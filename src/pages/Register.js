import React from 'react';

export default class Register extends React.Component {
    state = {
        email: '',
        password: '',
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.register(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input
                        type="text"
                        className="form-control my-3"
                        placeholder="Email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        />
                </div>
                <div>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="text-center my-3">
                    <button
                        type="submit"
                        className="btn btn-secondary my-2 w-100"
                    >
                        Signup
                    </button>
                </div>
                <div className="text-center my-3">
                    Already have an account? <a href='/login'>Login</a>
                </div>
            </form>
        )
    }
}