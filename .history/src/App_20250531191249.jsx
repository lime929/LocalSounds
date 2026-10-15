import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home.js";
import EventsPage from "./pages/Events.js";
const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/Events", element: <EventsPage /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Header />
      <main></main>
      <Footer />
    </>
  );
}

export default App;
