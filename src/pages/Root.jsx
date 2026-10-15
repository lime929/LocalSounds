import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function RootLayout() {
  const location = useLocation();
  
  useEffect(() => {
    let pageTitle = 'Local Sounds';
    
    const pathTitles = {
      '/about': 'Local Sounds | About',
      '/artists': 'Local Sounds | Artists',
      '/events': 'Local Sounds | Events',
      '/musicshops': 'Local Sounds | Music Shops'
    };

    document.title = pathTitles[location.pathname] || pageTitle;
  }, [location]);

  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </> 
  );
}
