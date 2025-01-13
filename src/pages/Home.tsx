import React from "react";
import { useUser } from "../UserContext";

const Home = (): React.ReactElement => {
  const { user } = useUser();
  return (
    <div className="container">
      {user ? (
        <> logadooo, bem vindo {user.username}! </>
      ) : (
        <> voce nao esta logado</>
      )}
      <div> first home </div>
      <div> first home </div>
      <div> first home </div>
      <div> first home </div>
      <div> first home </div>
      <div> first home </div>
      <div> first home </div>
      <div> first home </div>
      <div> first home </div>
      <div> first home </div>
      <div> first home </div>
      <div> first home </div>
      <div> first home </div>
      <div> first home </div>
      <div> first home </div>
      <div> first home </div>
      <div> first home </div>
      <div> first home </div>
      <div> first home </div>
      <div> first home </div>
      <div> first home </div>
      <div> first home </div>
      <div> first home </div>
      <div> first home </div>
      <div> first home </div>
      <div> first home </div>
      <div> first home </div>
      <div> first home </div>
      <div> first home </div>
      <div> first home </div>
      <div> first home </div>
    </div>
  );
};

export default Home;
