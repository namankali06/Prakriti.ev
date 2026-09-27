import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import ProductDetails from "./pages/ProductDetails"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="model/:id" element={<ProductDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
