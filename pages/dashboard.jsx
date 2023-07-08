import React, { useEffect, useState } from "react";
import LoginForm from "../Components/dashboard/LoginForm";
import DashboardPage from "../Components/dashboard/DashboardPage";

const Dashboard = ({ AllBlogs, AllAdmins }) => {
  console.log(AllAdmins)
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof sessionStorage !== "undefined") {
      const storedToken = sessionStorage.getItem("secret-token-7k@zR");
      if (storedToken) {
        setToken(storedToken);
      }
    }
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return token ? (
    <DashboardPage
      setToken={setToken}
      AllBlogs={AllBlogs}
      AllAdmins={AllAdmins}
    />
  ) : (
    <LoginForm setToken={setToken} />
  );
};

export default Dashboard;

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog`);
  const AllBlogs = await res.json();
  const res1 = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/getAllUser`);
  const AllAdmins = await res1.json();
  return { props: { AllBlogs, AllAdmins } };
}
