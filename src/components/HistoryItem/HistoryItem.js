import PropTypes from "prop-types";
import style from "./HistoryItem.module.css";

export default function HistoryItem(item) {
  const { type, amount, currency } = item;
  return (
    <tr>
      <td className={style.td}>{type}</td>
      <td className={style.td}>{amount}</td>
      <td className={style.td}>{currency}</td>
    </tr>
  );
}

HistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
