import React, { useEffect } from "react";
import Brand from "../../components/brand/Brand";
import Blog from "../../components/blog/Blog";
import CompanyInfo from "../../components/componyInfo/CompanyInfo";

const AboutCompany = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <CompanyInfo />
      <Brand />
      <Blog isMarriade={false} />
    </div>
  );
};

export default AboutCompany;
