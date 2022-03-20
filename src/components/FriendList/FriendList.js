import PropTypes from "prop-types";
import s from "./FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <ul className={s.list}>
      {friends.map((friend) => (
        <li className={s.item} key={friend.id}>
          <span
            className={s.status}
            style={{ backgroundColor: friend.isOnline ? "green" : "red" }}
          ></span>
          <img
            className={s.avatar}
            src={friend.avatar}
            alt="some text"
            width="50"
          />
          <span className={s.name}>{friend.name}</span>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array,
};
