import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/Home.jsx";
import EventsPage from "./components/Events.jsx";
const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/Events", element: <EventsPage /> },
]);

function App() {
  return (
    <>
      <Header />
      <main></main>
      <Footer />
    </>
  );
}

export default App;
