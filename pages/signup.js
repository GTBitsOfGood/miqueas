import React from 'react';
import { signUp, verifyToken } from '../frontend/actions/Users';
import '../public/signup.css';

class SignUp extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
    };

    this.errorKeys = [];
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  submitForm = async (event) => {
    event.preventDefault();

    const { name, email, password } = this.state;

    await signUp(name, email, password)
      .then(async () => {
        this.setState({
          name: '',
          email: '',
          password: '',
        });
      })
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div className="SignUpContainer">
        <h1>Create User</h1>
        <form
          className="SignUpForm"
          onSubmit={this.submitForm}
        >
          <div className="InputContainer">
            <label>Name</label>
            <input
              name="name"
              type="text"
              value={name}
              onChange={this.onChange}
              required
            />
          </div>
          <div className="InputContainer">
            <label>Email</label>
            <input
              name="email"
              type="email"
              value={email}
              onChange={this.onChange}
              required
            />
          </div>
          <div className="InputContainer">
            <label>Password</label>
            <input
              name="password"
              type="password"
              value={password}
              onChange={this.onChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default SignUp

