import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import HomePage from "./pages/Home.jsx";
import EventsPage from "./pages/Events.jsx";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx"; // Added missing Footer import

// Layout component that includes NavBar and Outlet
const Layout = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/Events", element: <EventsPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
