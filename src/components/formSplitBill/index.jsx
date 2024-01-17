import { Button } from "../common/button";
import "./style.css";

export const FormSplitBill = ({ selectedFriend }) => {
  return (
    <form className="form-split-bill">
      <h2 className="form-split-bill-title">
        Split a bill with {selectedFriend.name}
      </h2>

      <div className="wrapper-form">
        <label htmlFor="bill">💰 Bill value</label>
        <input type="text" id="bill" />
      </div>

      <div className="wrapper-form">
        <label htmlFor="expense">🕺 Your expense</label>
        <input type="text" id="expense" />
      </div>

      <div className="wrapper-form">
        <label htmlFor="all-expense">👭 {selectedFriend.name}'s expense</label>
        <input type="text" id="all-expense" disabled className="disabled" />
      </div>

      <div className="wrapper-form">
        <label htmlFor="select">🤑 Who is paying the bill</label>
        <select id="select">
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
