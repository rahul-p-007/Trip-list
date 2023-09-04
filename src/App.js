import React, { useState } from "react";
import Form from "./components/Form/Form";
import Logo from "./components/Logo/Logo";
import PackingList from "./components/PackingList/PackingList";
import Stats from "./components/Stats/Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function hadleAddItem(Item) {
    // Adding the new item to the list of items
    setItems((items) => [...items, Item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearItem() {
    const confirmed = window.confirm("Are you sure you want delete all items?");

    if (confirmed) {
      setItems([]);
    }
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItmes={hadleAddItem} />
      <PackingList
        items={items}
        onDelete={handleDeleteItem}
        onChecked={handleToggleItem}
        onClearlist={handleClearItem}
      />
      <Stats items={items} />
    </div>
  );
}
