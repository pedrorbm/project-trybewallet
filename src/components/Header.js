import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import logo from '../images/logoTrybeWallet.png';
import coin from '../images/iconeMoeda.png';
import profile from '../images/iconePerfil.png';

class Header extends Component {
  sumValue = (expenses) => {
    let result = 0;

    expenses.map((object) => {
      const sum = object.exchangeRates[object.currency].ask * object.value;
      result += sum;
      return result;
    });

    return result.toFixed(2);
  };

  render() {
    const { email, expenses } = this.props;

    return (
      <div className="containerHeader">
        <div>
          <img className="logoHeader" src={ logo } alt="imagem do logotipo" />
        </div>
        <div className="valueCurrency">
          <img src={ coin } alt="ícone de moeda" />
          <h4
            className="h4Currency"
            data-testid="total-field"
          >
            { `Total de despesas: ${this.sumValue(expenses)}` }

          </h4>
          <h4 className="h4Currency" data-testid="header-currency-field">BRL</h4>
        </div>
        <div className="headerPerfil">
          <img src={ profile } alt="ícone de perfil" />
          <h4 className="h4Email" data-testid="email-field">{ email }</h4>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.user,
  ...state.wallet,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;
