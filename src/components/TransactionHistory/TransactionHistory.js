import PropTypes from "prop-types";
import HistoryItem from "../HistoryItem/HistoryItem";

export default function TransactionHistory({ items }) {
  // const { id, type, amount, currency } = transaction;
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <HistoryItem
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  friends: PropTypes.array,
};
