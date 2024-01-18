import { useState } from "react";
import { Button } from "../common/button";
import "./style.css";

export const FormSplitBill = ({ selectedFriend, onSplitBill }) => {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!bill || !paidByUser) {
      return;
    }

    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByFriend);
  };

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2 className="form-split-bill-title">
        Split a bill with {selectedFriend.name}
      </h2>

      <div className="wrapper-form">
        <label htmlFor="bill">💰 Bill value</label>
        <input
          type="number"
          id="bill"
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
        />
      </div>

      <div className="wrapper-form">
        <label htmlFor="expense">🕺 Your expense</label>
        <input
          type="number"
          id="expense"
          value={paidByUser}
          onChange={(e) =>
            setPaidByUser(
              Number(e.target.value) > bill
                ? paidByUser
                : Number(e.target.value)
            )
          }
        />
      </div>

      <div className="wrapper-form">
        <label htmlFor="all-expense">👭 {selectedFriend.name}'s expense</label>
        <input
          type="text"
          id="all-expense"
          disabled
          className="disabled"
          value={paidByFriend}
        />
      </div>

      <div className="wrapper-form">
        <label htmlFor="select">🤑 Who is paying the bill</label>
        <select
          id="select"
          value={whoIsPaying}
          onChange={(e) => setWhoIsPaying(e.target.value)}
        >
          <option value="user">You</option>
          <option value="friend"> {selectedFriend.name}</option>
        </select>
      </div>

      <div className="wrapper-btn-split-bill">
        <Button>Split bill</Button>
      </div>
    </form>
  );
};
