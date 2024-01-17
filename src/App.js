import { Button } from "./components/common/button";
import { FormAddFriend } from "./components/formAddFriend";
import { FormSplitBill } from "./components/formSplitBill";
import { FriendsList } from "./components/friendsList";

export default function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        <FormAddFriend />
        <Button>Add Friend</Button>
      </div>

      <FormSplitBill />
    </div>
  );
}
