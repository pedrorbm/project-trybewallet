import React from 'react';
import { connect } from 'react-redux';
import { addEmail } from '../redux/actions';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    btnPermission: true,
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value }, () => {
      const { email, password } = this.state;
      const validation = /\S+@\S+\.\S+/;

      if ( validation.test(email) && password.length >= 6 ) {
        this.setState({ btnPermission: false });
      } else {
        this.setState({ btnPermission: true });
      }
    });
  }

  handleSubmit = () => {
    const { dispatch, history } = this.props;
    const { email, password } = this.state;
    dispatch(addEmail(email))
    history.push('/carteira');
  }

  render() {
    const { btnPermission } = this.state

    return (
      <div>
        <input 
          data-testid="email-input"
          type="email"
          name="email"
          onChange={ this.handleChange }
        />
        <input 
          data-testid="password-input"
          type="password"
          name="password" 
          onChange={ this.handleChange } 
        />
        <button onClick={ this.handleSubmit } disabled={ btnPermission }>Entrar</button>
      </div>
    );
  }
}

export default connect()(Login);
