import { Icon } from "./Icon";
export const CardTop = () => {
  return (
    <div className="cardTop">
      <div className="cardTop__content">
        <p className="content__balance">My balance</p>
        <p className="content__amount">$921.48</p>
      </div>
      <Icon />
    </div>
  );
};
