import MainLayout from "../../components/layouts/MainLayout.component";
import Authorization from "../../components/ui/Auth/authorization/authorization";
import { useActions } from "../../hooks/useActions";
import { AuthorizationType } from "../../store/action-creators/authorization";

import s from "./AuthPage.module.scss";

const AuthPage = () => {
  const { login } = useActions();

  return (
    <MainLayout selfClassName={s.auth}>
      <Authorization fetchCallback={login} />
    </MainLayout>
  );
};

export default AuthPage;
