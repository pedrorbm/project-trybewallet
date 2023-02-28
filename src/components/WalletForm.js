import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestApi, requestApiExpenses, edit, editExpenses } from '../redux/actions';

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
    const { dispatch, editor, expenses, idToEdit } = this.props;

    if (editor) {
      dispatch(edit(false));
      expenses[idToEdit].value = value;
      expenses[idToEdit].description = description;
      expenses[idToEdit].currency = currency;
      expenses[idToEdit].method = method;
      expenses[idToEdit].tag = tag;

      dispatch(editExpenses(expenses));
      this.setState({ value: '', description: '' });
    } else {
      dispatch(requestApiExpenses({ id, value, currency, method, tag, description }));
      const changeId = id === 0 ? this.setState({ id: 1 })
        : this.setState({ id: id + 1 });
      this.setState({ value: '', description: '' });

      return changeId;
    }
  };

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies, editor } = this.props;

    return (
      <div className="containerWalletForm">
        <form>
          <div className="teste">
            <p>Descrição da despesa</p>
            <input
              className="inputDescription"
              data-testid="description-input"
              type="text"
              name="description"
              value={ description }
              onChange={ this.handleChange }
            />
          </div>
          <div className="teste">
            <p>Categoria da despesa</p>
            <select
              className="selectTag"
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
          </div>
          <div className="teste">
            <p>Valor</p>
            <input
              className="inputValue"
              data-testid="value-input"
              type="number"
              name="value"
              value={ value }
              onChange={ this.handleChange }
            />
          </div>
          <div className="teste">
            <p>Método de pagamento</p>
            <select
              className="selectMethod"
              data-testid="method-input"
              name="method"
              value={ method }
              onChange={ this.handleChange }
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </div>
          <div className="teste">
            <p>Moeda</p>
            <select
              className="selectCurrency"
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
          </div>
        </form>
        <div className="containerBtnWalletForm">
          <button
            className="btnWalletForm"
            type="button"
            onClick={ this.submit }
          >
            { editor ? <span>Editar despesa</span> : <span>Adicionar despesa</span> }
          </button>
        </div>
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
