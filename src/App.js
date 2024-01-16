import { FormAddFriend } from "./components/formAddFriend";
import { FriendsList } from "./components/friendsList";

export default function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        <FormAddFriend />
      </div>
    </div>
  );
}
