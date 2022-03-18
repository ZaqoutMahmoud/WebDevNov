import { useUserName } from "../context/UserContext";
import { useDrink } from "../context/DrinkContext";

const Menu = () => {
  
  const userName = useUserName();
  const drink = useDrink();

  return (
    <ul className="nav nav-pills">
      <li className="nav-item">
        <a href="/" className="nav-link" aria-current="page">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a href="/" className="nav-link">
          Pricing
        </a>
      </li>
      <li className="nav-item">
        <a href="/" className="nav-link">
          FAQs
        </a>
      </li>
      <li className="nav-item">
        <a href="/" className="nav-link active">
          {userName} drinks {drink}
        </a>
      </li>
    </ul>
  );
};

export default Menu;