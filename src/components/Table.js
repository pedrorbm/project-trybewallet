import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeExpenses, edit } from '../redux/actions';

class Table extends Component {
  render() {
    const { expenses, dispatch } = this.props;

    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {
            expenses.map((object) => (
              <tr key={ object.id }>
                <td>{ object.description }</td>
                <td>{ object.tag }</td>
                <td>{ object.method }</td>
                <td>{ `${object.value}.00` }</td>
                <td>{ object.exchangeRates[object.currency].name }</td>
                <td>{ (object.exchangeRates[object.currency].ask * 1).toFixed(2) }</td>
                <td>
                  { (object.exchangeRates[object.currency].ask * object.value)
                    .toFixed(2) }
                </td>
                <td>Real</td>
                <td>
                  <button
                    data-testid="edit-btn"
                    type="button"
                    onClick={ () => {
                      dispatch(edit(true, object.id));
                    } }
                  >
                    Editar

                  </button>
                  <button
                    data-testid="delete-btn"
                    type="button"
                    onClick={ () => {
                      const test = expenses.filter((obj) => obj.id !== object.id);
                      dispatch(removeExpenses(test));
                    } }
                  >
                    {' '}
                    Excluir
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.wallet,
});

export default connect(mapStateToProps)(Table);

Table.propTypes = {
  expenses: PropTypes.array,
}.isRequired;
