import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeExpenses, edit } from '../redux/actions';
import remove from '../images/iconeExcluir.png';
import editar from '../images/iconeEdit.png';

class Table extends Component {
  render() {
    const { expenses, dispatch } = this.props;

    return (
      <table>
        <thead>
          <tr>
            <th className="tableTitles">Descrição</th>
            <th className="tableTitles">Tag</th>
            <th className="tableTitles">Método de pagamento</th>
            <th className="tableTitles">Valor</th>
            <th className="tableTitles">Moeda</th>
            <th className="tableTitles">Câmbio utilizado</th>
            <th className="tableTitles">Valor convertido</th>
            <th className="tableTitles">Moeda de conversão</th>
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
                <td className="btnEditRemove">
                  <button
                    className="edit-btn"
                    data-testid="edit-btn"
                    type="button"
                    onClick={ () => {
                      dispatch(edit(true, object.id));
                    } }
                  >
                    <img src={ editar } alt="Ícone de excluir" />

                  </button>
                  <button
                    className="delete-btn"
                    data-testid="delete-btn"
                    type="button"
                    onClick={ () => {
                      const test = expenses.filter((obj) => obj.id !== object.id);
                      dispatch(removeExpenses(test));
                    } }
                  >
                    {' '}
                    <img src={ remove } alt="Ícone de editar" />
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
