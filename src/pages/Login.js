import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEmail } from '../redux/actions';
import logo from '../images/logoTrybeWallet.png';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
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
      <div className="loginPage">
        <div className="containerLogin">
          <img className="logoLogin" src={ logo } alt="imagem do logotipo" />
          <input
            className="inputLogin"
            placeholder="Email"
            data-testid="email-input"
            type="email"
            name="email"
            onChange={ this.handleChange }
          />
          <input
            className="inputLogin"
            placeholder="Senha"
            data-testid="password-input"
            type="password"
            name="password"
            onChange={ this.handleChange }
          />
          <button
            className="btnLogin"
            onClick={ this.handleSubmit }
            disabled={ btnPermission }
          >
            <span>ENTRAR</span>

          </button>
        </div>
      </div>
    );
  }
}

export default connect()(Login);

Login.propTypes = {
  history: PropTypes.object,
  dispatch: PropTypes.object,
}.isRequired;
