import { Footer } from "./components/layout/Footer"
import { Header } from "./components/layout/Header"
import { Home } from "./pages/Home"

export const App = () => {

  return (
    <div className="w-full min-h-screen">
      <Header />
      <Home />
      <Footer />
    </div>
  )
}