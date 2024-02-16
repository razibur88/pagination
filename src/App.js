import RootLayout from "./components/root/RootLayout";
import Home from "./pages/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Product from "./pages/Product";
import Error from "./pages/Error";
import ProductDetails from "./pages/ProductDetails";
let router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route path="/" element={<Home />}></Route>
      <Route path="/product" element={<Product />}></Route>
      <Route path="/product/:id" element={<ProductDetails />}></Route>
      <Route path="*" element={<Error />}></Route>
    </Route>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
