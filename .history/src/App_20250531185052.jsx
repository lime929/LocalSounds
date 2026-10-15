import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/Home.jsx";
import ProductsPage from "./components/Products.jsx";
const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/products", element: <ProductPage /> },
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
