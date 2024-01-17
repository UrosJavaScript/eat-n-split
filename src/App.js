import { useState } from "react";
import { Button } from "./components/common/button";
import { FormAddFriend } from "./components/formAddFriend";
import { FormSplitBill } from "./components/formSplitBill";
import { FriendsList } from "./components/friendsList";
// helpers
import { INITIAL_FRIENDS } from "./helpers";

export default function App() {
  const [friends, setFriends] = useState(INITIAL_FRIENDS);
  const [showAddFriend, setShowAddFriend] = useState(false);

  const handleShowAddFriend = () => {
    setShowAddFriend((show) => !show);
  };

  const handleAddFriend = (friend) => {
    setFriends([...friends, friend]);
    setShowAddFriend(false);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>

      <FormSplitBill />
    </div>
  );
}
