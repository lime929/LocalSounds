import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home.jsx";
import EventsPage from "./pages/Events.jsx";
import ArtistsPage from "./pages/Artists.jsx";
import AboutPage from "./pages/About.jsx";
import MusicShops from "./pages/MusicShops.jsx";
import RootLayout from "./pages/Root.jsx";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/events", element: <EventsPage /> },
      { path: "/artists", element: <ArtistsPage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/musicshops", element: <MusicShops /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
