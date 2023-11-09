export default function Stats({ items }) {
  //initial check
  if (!items.length) return <p className="stats">Start Adding items!</p>;

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;

  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "Congrats youre fully packed!"
          : `you have ${numItems} items on your list, and you already packed ${percentage}% `}
      </em>
    </footer>
  );
}
