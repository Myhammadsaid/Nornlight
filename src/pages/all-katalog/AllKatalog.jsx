import React from "react";
import Katalog from "../../components/katalog/Katalog";
import Blog from "../../components/blog/Blog";
import Brand from "../../components/brand/Brand";

const AllKatalog = () => {
  return (
    <div>
      <Katalog isMarriadeCard={true} />
      <Brand />
      <Blog isMarriade={true} isMarriadeProduct={false} />
    </div>
  );
};

export default AllKatalog;
