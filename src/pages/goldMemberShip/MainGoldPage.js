import "../../assest/css/student/dashBoardStudent.css";
import GoldenNavbar from "../../components/goldMemberShip/GoldenNavbar";
import GoldenDashboard from "../../components/goldMemberShip/GoldenDashboard";
import GoldTopMain from "../../components/goldMemberShip/GoldTopMain";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

export default function () {
  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  }, []);
  return (
    <div className="dashboard">
      <GoldenNavbar />
      <div className="dashboard-wrapper">
        <div className="dashbaord-sidebar">
          <GoldenDashboard />
        </div>
        <div className="dashbaord-content">
          <GoldTopMain />
          <Outlet />
        </div>
      </div>
    </div>
  );
}
