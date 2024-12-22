import React from "react";
import { useUser } from "../UserContext";

const Home = (): React.ReactElement => {
  const { user } = useUser();
  return (
    <>
      <div> first home </div>
      {user ? (
        <> logadooo, bem vindo {user.username}! </>
      ) : (
        <> voce nao esta logado</>
      )}
    </>
  );
};

export default Home;
