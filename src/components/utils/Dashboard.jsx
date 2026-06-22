import React from 'react';
import { FiShoppingCart, FiPackage } from 'react-icons/fi';
import Emp from "../../assets/customer2.jpg";
import DashboardProfileHeader from './DashboardProfileHeader'; 

const metrics = [ 
  { label: "Orders", value: 120, icon: FiShoppingCart, iconBg: "bg-blue-50 text-blue-500", trend: "+12%", trendType: "up" }, 
  { label: "Products", value: 45, icon: FiPackage, iconBg: "bg-green-50 text-green-500", trend: "-5%", trendType: "down" } 
];

const Dashboard = () => {
  return (
    <div className="container mt-5 margin-dashborad">
      <DashboardProfileHeader 
        role="User"
        name="Aazmeer"
        imgSrc={Emp}
        metrics={metrics}
      />
    </div>
  );
};

export default Dashboard;