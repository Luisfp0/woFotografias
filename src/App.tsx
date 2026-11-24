import { Home } from './pages/Home'
import { Gallery } from './pages/Gallery'
import { About } from './pages/About'
import { Footer } from './components/layout/Footer'
import { Testimonials } from './pages/Testimonials'
import { Header } from './components/layout/Header'
import { Route, Routes } from 'react-router-dom'
import { GalleryBirthdays } from './pages/GalleryBirthdays'
import { GalleryWeddings } from './pages/GalleryWeddings'
import { GalleryAuditions } from './pages/GalleryAuditions'
import { GalleryPreWeddings } from './pages/GalleryPreWeddings'
import { GalleryProducts } from './pages/GalleryProducts'

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
        <Route path="/gallery/weddings" element={<GalleryWeddings />} />
        <Route path="/gallery/auditions" element={<GalleryAuditions />} />
        <Route path="/gallery/pre_weddings" element={<GalleryPreWeddings />} />
        <Route path="/gallery/products" element={<GalleryProducts />} />
      </Routes>
      <Footer />
    </div>
  )
}
