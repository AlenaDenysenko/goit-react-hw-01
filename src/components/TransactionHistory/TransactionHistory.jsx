import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Transaction History</h2>
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
      </table>
      </div>
  );
};

export default TransactionHistory;
