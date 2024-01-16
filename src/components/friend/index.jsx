import { Button } from "../common/button";

export const Friend = ({ friend }) => {
  return (
    <li className="list-friend">
      <img src={friend.image} alt={friend.name} />
      <div className="wrapper-description">
        <h3 className="name-friend">{friend.name}</h3>

        {friend.balance < 0 && (
          <p className="balance-greater-color">
            You owe {friend.name} {Math.abs(friend.balance)}€
          </p>
        )}

        {friend.balance > 0 && (
          <p className="balance-less-color">
            {friend.name} owes you {Math.abs(friend.balance)}€
          </p>
        )}

        {friend.balance === 0 && <p>You and {friend.name} are even.</p>}
      </div>

      <Button>Select</Button>
    </li>
  );
};
