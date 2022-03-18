import { useState } from "react";
import styled from "styled-components";
// https://www.smashingmagazine.com/2020/07/styled-components-react/
const Button = styled.button`
  /* This renders the buttons above... Edit me! */

  margin: 0.25vw 0px;
`;
const UpdateProfileName = ({
  userName,
  onUpdateUserName,
  drink,
  onUpdateDrink
}) => {
  const [newName, setNewName] = useState(userName);
  const [newDrink, setNewDrink] = useState(drink);
  const onClickUpdate = e => {
    e.preventDefault();
    // https://www.w3schools.com/jsref/event_preventdefault.asp#:~:text=The%20preventDefault()%20method%20cancels,link%20from%20following%20the%20URL
    onUpdateUserName(newName);
  };
  const onClickUpdateDrink = e => {
    e.preventDefault();
    onUpdateDrink(newDrink);
  };
  const onClickUpdateAll = e => {
    onClickUpdateDrink(e);
    onClickUpdate(e);
  };

  return (
    <div className="container col-xl-10 col-xxl-8 px-4 py-5">
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="display-4 fw-bold lh-1 mb-3">
            {userName + " "}drinks {drink}
          </h1>
          <p className="col-lg-10 fs-4">De Bistro</p>
        </div>
        <div className="col-md-10 mx-auto col-lg-5">
          <form className="p-4 p-md-5 border rounded-3 bg-light">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Drink"
                value={newDrink}
                onChange={e => setNewDrink(e.target.value)}
              />
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Name"
                value={newName}
                onChange={e => setNewName(e.target.value)}
              />
            </div>
            <Button
              onClick={onClickUpdateDrink}
              className="w-100 btn btn-lg btn-primary"
            >
              UpdateDrink
            </Button>{" "}
            <Button
              onClick={onClickUpdate}
              className="w-100 btn btn-lg btn-primary"
            >
              Update Client
            </Button>
            <Button
              onClick={onClickUpdateAll}
              className="w-100 btn btn-lg btn-primary"
            >
              All
            </Button>
            <hr className="my-4" />
            <small className="text-muted">Thank you</small>
          </form>
        </div>
      </div>
    </div>
  );
};
export default UpdateProfileName;

