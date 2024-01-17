import { Friend } from "../friend";
import "./style.css";

export const FriendsList = ({ friends }) => {
  return (
    <ul className="wrapper-friend-list">
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
};
