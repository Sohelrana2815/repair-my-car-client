import { Outlet } from "react-router";
import Navbar from "../Page/shared/Navbar/Navbar";

const Root = () => {
  return (
    <div className="max-w-screen-2xl  mx-auto px-4 my-8">
      <Navbar />
      <main className="my-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
