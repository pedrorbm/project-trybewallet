import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEmail } from '../redux/actions';

class Login extends React.Component {
  state = {
    email: '',
    btnPermission: true,
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value }, () => {
      const { email, password } = this.state;
      const validation = /\S+@\S+\.\S+/;
      const six = 6;

      if (validation.test(email) && password.length >= six) {
        this.setState({ btnPermission: false });
      } else {
        this.setState({ btnPermission: true });
      }
    });
  };

  handleSubmit = () => {
    const { dispatch, history } = this.props;
    const { email } = this.state;
    dispatch(addEmail(email));
    history.push('/carteira');
  };

  render() {
    const { btnPermission } = this.state;

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
        />
        <button onClick={ this.handleSubmit } disabled={ btnPermission }>Entrar</button>
      </div>
    );
  }
}

export default connect()(Login);

Login.propTypes = {
  history: PropTypes.object,
  dispatch: PropTypes.object,
}.isRequired;
