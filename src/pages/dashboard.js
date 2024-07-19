import dynamic from "next/dynamic";

const Dashboard = dynamic(() => import("../components/Dashboard"), {
  ssr: false,
});

const DashboardPage = () => {
  return <Dashboard />;
};

export default DashboardPage;
