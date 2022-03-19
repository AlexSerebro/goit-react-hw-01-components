import PropTypes from "prop-types";

export default function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map((friend) => (
        <li className="item" key={friend.id}>
          <span
            style={{ backgroundColor: friend.isOnline ? "green" : "red" }}
          ></span>
          <img
            className="avatar"
            src={friend.avatar}
            alt="some text"
            width="50"
          />
          <span className="name">{friend.name}</span>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array,
};
