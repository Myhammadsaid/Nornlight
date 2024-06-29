import React from "react";
import Brand from "../../components/brand/Brand";
import Blog from "../../components/blog/Blog";
import Company from "../../components/compony/Company";

const AboutCompany = () => {
  return (
    <div>
      <Company />
      <Brand />
      <Blog isMarriade={false} />
    </div>
  );
};

export default AboutCompany;
