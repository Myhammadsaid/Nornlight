import React, { useEffect } from "react";
import Single from "../../components/single/Single";
import SingleInfo from "../../components/singleInfo/SingleInfo";

const SingleRoute = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Single />
      <SingleInfo />
    </div>
  );
};

export default SingleRoute;
