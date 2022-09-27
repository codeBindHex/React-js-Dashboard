import React from "react";
import Chart from "../../components/Chart/Chart";
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo";
import "./Home.css";
import { userData } from "../../dummyData";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import WidgetSm from "../../components/widgetSm/WidgetSm";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />

      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />

      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
