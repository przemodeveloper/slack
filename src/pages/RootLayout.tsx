import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";

const RootLayout = () => {
  return (
    <>
      <Header />
      <AppBody>
        <Sidebar />
        <Outlet />
      </AppBody>
    </>
  );
};

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

export default RootLayout;
