import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestApi, requestApiExpenses } from '../redux/actions';

class WalletForm extends Component {
  state = {
    id: 0,
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(requestApi());
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  submit = () => {
    const { id, value, description, currency, method, tag } = this.state;
    const { dispatch } = this.props;

    dispatch(requestApiExpenses({ id, value, currency, method, tag, description }));
    const changeId = id === 0 ? this.setState({ id: 1 }) : this.setState({ id: id + 1 });
    this.setState({ value: '', description: '' });
    return changeId;
  };

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies } = this.props;

    return (
      <div>
        <form>
          <input
            data-testid="value-input"
            type="text"
            name="value"
            placeholder="Valor da despesa"
            value={ value }
            onChange={ this.handleChange }
          />
          <input
            data-testid="description-input"
            type="text"
            name="description"
            placeholder="Descrição da despesa"
            value={ description }
            onChange={ this.handleChange }
          />
          <select
            data-testid="currency-input"
            name="currency"
            value={ currency }
            onChange={ this.handleChange }
          >
            {
              currencies.map((coin, index) => (
                <option key={ index } value={ coin }>{ coin }</option>))
            }
          </select>
          <select
            data-testid="method-input"
            name="method"
            value={ method }
            onChange={ this.handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
          <select
            data-testid="tag-input"
            name="tag"
            value={ tag }
            onChange={ this.handleChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
          <button
            type="button"
            onClick={ this.submit }
          >
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.wallet,
});

export default connect(mapStateToProps)(WalletForm);

WalletForm.propTypes = {
  dispatch: PropTypes.object,
  currencies: PropTypes.array,
}.isRequired;
