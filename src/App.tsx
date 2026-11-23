import { Home } from "./pages/Home"
import { Gallery } from "./pages/Gallery"
import { About } from "./pages/About"
import { Footer } from "./components/layout/Footer"
import { Testimonials } from "./pages/Testimonials"
import { Header } from "./components/layout/Header"
import { Route, Routes } from "react-router-dom"
import { GalleryBirthdays } from "./pages/GalleryBirthdays"

export const App = () => {
  return (
    <div className="w-full min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/gallery/birthdays" element={<GalleryBirthdays />} />
      </Routes>
      <Footer />
    </div>
  )
}