import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home.js";
import EventsPage from "./pages/Events.js";
import NavBar from "./components/NavBar.jsx";
const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/Events", element: <EventsPage /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <NavBar />
      <main></main>
      <Footer />
    </>
  );
}

export default App;
