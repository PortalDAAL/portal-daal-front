import React from "react";
import { useUser } from "../UserContext";

const Home = (): React.ReactElement => {
  const { user } = useUser();
  return (
    <>
      <div> first home </div>
      {user ? <> logged! </> : <> you are not logged</>}
    </>
  );
};

export default Home;
