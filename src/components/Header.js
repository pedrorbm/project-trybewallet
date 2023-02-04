import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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
      <div>
        <h4 data-testid="email-field">{ email }</h4>
        <h4 data-testid="total-field">{ this.sumValue(expenses) }</h4>
        <h4 data-testid="header-currency-field">BRL</h4>
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
