import PropTypes from "prop-types";
import HistoryItem from "../HistoryItem/HistoryItem";
import s from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  // const { id, type, amount, currency } = transaction;
  return (
    <table className={s.history}>
      <thead>
        <tr>
          <th className={s.th}>Type</th>
          <th className={s.th}>Amount</th>
          <th className={s.th}>Currency</th>
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
