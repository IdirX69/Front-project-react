import Navigation from "../components/Navigation";
import { useUser } from "../contexte/UserContext";
import LoginRegister from "./LoginRegister";
import AccountNavigation from "../components/AccountNavigation";
import UserInfos from "../components/UserInfos";

const Account = () => {
  const { user } = useUser();

  if (!user) {
    return <LoginRegister />;
  }

  return (
    <>
      <Navigation />
      <div className="account-page-container">
        <AccountNavigation />
        <UserInfos />
      </div>
    </>
  );
};

export default Account;
