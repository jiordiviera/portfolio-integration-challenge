import { Outlet } from "react-router-dom";
import Header from "./partials/header";

export default function Root() {
  return (
    <div className="min-h-screen">
     <Header/>
      <main>
        <Outlet />
      </main>

    </div>
  );
}
