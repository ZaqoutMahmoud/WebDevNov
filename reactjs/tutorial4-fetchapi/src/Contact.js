import { useEffect, useState } from "react";

export default function ContactPage() {
  const [currencies, setCurrencies] = useState([]);
  useEffect(() => {
    FetchCurrencies();
  }, []);

  const FetchCurrencies = () => {
    fetch(process.env.REACT_APP_API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setCurrencies(data.data);
        setTimeout(FetchCurrencies, 3000);
      });
  };
  return (
    <>
      <h1>Contact Page</h1>
      <ul>
        {currencies.map((currency, index) => (
          <li key={index}>
            {currency.name} - Price: {currency.quote["USD"].price}
          </li>
        ))}
      </ul>
    </>
  );
}
