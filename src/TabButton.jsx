export default function TabButton({ children, onSelect, isSelected }) {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={oSelect}>
        {children}
      </button>
    </li>
  );
}
