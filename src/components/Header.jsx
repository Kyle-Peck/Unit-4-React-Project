import { useState } from "react";
import Button from "./Button";

const Header = ({ color: propColor, title, onShowAdd, showAdd }) => {
  const [color, setColor] = useState("red");

  return (
    <header className="header">
      <h2 style={{ color: propColor }}>{title}</h2>

      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Open"}
        onClick={onShowAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Todo List",
  color: "black",
};

export default Header;
