import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

function MainLayout() {
  return (
    <main className="min-h-screen bg-background text-text-primary">
      <Header />
      <Outlet />
       <Footer /> 
    </main>
  );
}

export default MainLayout;