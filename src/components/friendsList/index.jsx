// helpers
import { INITIAL_FRIENDS } from "../../helpers";
import { Friend } from "../friend";
import "./style.css";

export const FriendsList = () => {
  return (
    <ul className="wrapper-friend-list">
      {INITIAL_FRIENDS.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
};
