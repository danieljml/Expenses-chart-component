export const ItemList = ({ itemDay, itemSpent }) => {
  return (
    <li className="list__item">
      <span
        className={itemSpent >= 90 ? "item__barFull" : "item__bar"}
        style={{ height: `${itemSpent}%` }}
      ></span>
      <span className="item__day">{itemDay}</span>
    </li>
  );
};
