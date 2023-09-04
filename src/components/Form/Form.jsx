import { useState } from "react";
export default function Form({ onAddItmes }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const HandleSubmit = (e) => {
    e.preventDefault();

    if (!description) return alert("Please enter a description");

    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };
    console.log(newItem);

    onAddItmes(newItem);
    setDescription("");
    setQuantity(1);
  };

  return (
    <form className="add-form" onSubmit={HandleSubmit}>
      <h3>What do you need for tirp ? 😍</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
