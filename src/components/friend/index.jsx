export const Friend = ({ friend }) => {
  return (
    <li className="list-friend">
      <img src={friend.image} alt={friend.name} />
      <div className="wr">
        <h3>{friend.name}</h3>

        {friend.balance < 0 && (
          <p className="red">
            You owe {friend.name} {friend.balance}€
          </p>
        )}
      </div>
      <button>Select</button>
    </li>
  );
};
