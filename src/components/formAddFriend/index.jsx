import { useState } from "react";
import { Button } from "../common/button";
import "./style.css";

export const FormAddFriend = ({ onAddFriend }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  const handleSubmit = (evenet) => {
    evenet.preventDefault();

    if (!name || !image) {
      return;
    }

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/48");
  };

  return (
    <div className="wrapper-form-add-friend">
      <form className="form" onSubmit={handleSubmit}>
        <div className="wrapper-name-friend">
          <label htmlFor="name">🤼 Friend name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="wrapper-image-friend">
          <label htmlFor="image">📷 Image URL</label>
          <input
            type="text"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>

        <div className="wrapper-btn-add-friend">
          <Button>Add</Button>
        </div>
      </form>
    </div>
  );
};
