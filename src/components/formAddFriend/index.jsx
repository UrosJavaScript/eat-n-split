import { Button } from "../common/button";
import "./style.css";

export const FormAddFriend = () => {
  return (
    <div className="wrapper-form-add-friend">
      <form className="form">
        <div className="wrapper-name-friend">
          <label htmlFor="name">🤼 Friend name</label>
          <input type="text" id="name" />
        </div>

        <div className="wrapper-image-friend">
          <label htmlFor="image">📷 Image URL</label>
          <input type="text" id="image" />
        </div>

        <div className="wrapper-btn-add-friend">
          <Button>Add</Button>
        </div>
      </form>
    </div>
  );
};
