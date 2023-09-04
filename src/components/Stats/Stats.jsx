export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 😀</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentItems = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentItems === 100
          ? "You got everthing! Ready to go ✈ "
          : `🧳 You have ${numItems} items on your list, and You already packed
        ${numPacked}( ${percentItems}%)`}
      </em>
    </footer>
  );
}
