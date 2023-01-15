import React from "react";
import Banner from "../homelist/Banner";
import ListItem from "../homelist/ListItem";
import ListProduct from "../homelist/ListProduct";
import OtherInformation from "../otherinformation/OtherInformation";

const HomePage = () => {
  //return gia dien
  return (
    <div>
      <Banner />
      <ListItem />
      <ListProduct />
      <OtherInformation />
    </div>
  );
};
export default HomePage;
