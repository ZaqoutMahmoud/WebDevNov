const Branding = ({ userName, drink }) => {
  console.log("userName" + userName);
  console.log("drink" + drink);
  return (
    <a
      href="/"
      className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
    >
      <svg className="bi me-2" width="40" height="32">
        <use xlinkHref="#bootstrap"></use>
      </svg>
      <span className="fs-4">
        {userName+ " "}  drinks {drink}{" "}
      </span>
    </a>
  );
};

export default Branding;
