import { Fragment } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <Fragment>
      <Header />
      <main>{<Outlet />}</main>
    </Fragment>
  );
}

export default RootLayout;
