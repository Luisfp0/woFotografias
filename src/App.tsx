import { CustomerReviews } from "./components/CustomerReviews"
import { Header } from "./components/Header"
import { Home } from "./pages/Home"

export const App = () => {

  return (
    <div className="w-full min-h-screen">
      <Header />
      <Home />
      <CustomerReviews />
    </div>
  )
}