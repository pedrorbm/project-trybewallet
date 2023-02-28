import React from 'react';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import Table from '../components/Table';

class Wallet extends React.Component {
  render() {
    return (
      <div className="walletPage">
        <div className="containerWalletHeaderForm">
          <Header />
          <WalletForm />
        </div>
        <div className="absoluteDiv" />
        <div className="containerWalletTable">
          <Table />
        </div>
      </div>
    );
  }
}

export default Wallet;
