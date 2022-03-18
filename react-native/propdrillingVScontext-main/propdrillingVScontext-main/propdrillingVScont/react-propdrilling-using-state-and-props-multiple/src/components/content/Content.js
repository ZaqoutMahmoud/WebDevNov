import PromoAd from "./PromoAd";
import UpdateProfileName from "./UpdateProfileName";

const Content = ({ userName, onUpdateUserName, drink, onUpdateDrink }) => {
  return (
    <>
      <PromoAd />
      <UpdateProfileName
        userName={userName}
        onUpdateUserName={onUpdateUserName}
        drink={drink}
        onUpdateDrink={onUpdateDrink}
      />
    </>
  );
};

export default Content;
